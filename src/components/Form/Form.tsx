import React from "react";
import { FormikProvider, Form, Field, ErrorMessage } from "formik";
import styles from "./Form.module.css"; // Import CSS module
import useForm from "../../hooks/useForm";
import Title from "../Title/Title";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const AddBlogForm: React.FC = () => {
  const navigate = useNavigate();

  const { formikProps } = useForm(); // Destructure formikProps from useForm
  const { submitForm, isSubmitting, dirty, isValid } = formikProps;
  const { t } = useTranslation();

  if (isSubmitting) {
    // Navigate to the blog page after successful submission
    navigate("/"); // Example navigation
  }

  return (
    <>
      <Title content={t("addBlogs")} />

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
              disabled={!isValid || !dirty || isSubmitting}
              onClick={submitForm}
            >
              {t("submit")}
            </button>
          </Form>
        </FormikProvider>
      </div>
    </>
  );
};

export default AddBlogForm;
