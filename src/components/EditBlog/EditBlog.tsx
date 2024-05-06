import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BlogsServices from "../../services/Blogs";
import styles from "./EditBlogPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Title from "../Title/Title";
import { useTranslation } from "react-i18next";
import useEditBlog from "../../hooks/useEditBlog";
import { FormikProvider, Form, Field, ErrorMessage } from "formik";

interface Blog {
  id: string;
  title: string;
  description: string;
  liked: 1 | 0;
  unliked: 1 | 0;
}

const EditBlogPage: React.FC = () => {
  const { id } = useParams();

  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);
  const { formikProps } = useEditBlog(blog as Blog);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const fetchedBlog =
          i18n.language === "en"
            ? await BlogsServices.fetchDataByIdEn(id??"")
            : await BlogsServices.fetchDataByIdAr(id??"");
        setBlog(fetchedBlog);
        formikProps.setValues({
          title: fetchedBlog.title,
          description: fetchedBlog.description,
          liked: fetchedBlog.liked,
          unliked: fetchedBlog.unliked,
        });
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    fetchBlog();
  }, [id, i18n.language]);

  const handleSubmit = async () => {
    try {
      await formikProps.submitForm();
      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Title content={t("editBlogs")} />

      <div id="newsForm" className={styles.form}>
        <FormikProvider value={formikProps}>
          <Form>
            <div>
              <label htmlFor="title">{t("title")}</label>
              <br />
              <Field
                type="text"
                id="title"
                name="title"
                className={styles.myInput}
                required
              />
              <ErrorMessage
                name="title"
                component="div"
                className={styles.error}
              />
            </div>
            <div>
              <label htmlFor="description">{t("description")}</label>
              <br />
              <Field
                type="text"
                id="description"
                name="description"
                className={styles.myInput}
                required
              />
              <ErrorMessage
                name="description"
                component="div"
                className={styles.error}
              />
            </div>
            <br />
            <button
              type="submit"
              className={styles.myButton}
              disabled={
                !formikProps.isValid ||
                !formikProps.dirty ||
                formikProps.isSubmitting
              }
              onClick={handleSubmit}
            >
              {t("submit")}
            </button>
          </Form>
        </FormikProvider>
      </div>
    </>
  );
};

export default EditBlogPage;
