// hooks/useEditForm.ts
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import BlogsServices from "../services/Blogs";

interface Blog {
  id: string;
  title: string;
  description: string;
  liked: 1 | 0;
  unliked: 1 | 0;
}

interface FormValues {
  title: string;
  description: string;
  liked: 1 | 0;
  unliked: 1 | 0;
}

const useEditForm = (blog: Blog) => {
  const { i18n } = useTranslation();

  const validationSchema =
    i18n.language === "en"
      ? require("../components/EditBlog/schema").validationSchemaEn
      : require("../components/EditBlog/schema").validationSchemaAr;

  const handleSubmit = async (values: FormValues, formikBag: any) => {
    try {
      const editBlog =
        i18n.language === "en"
          ? BlogsServices.editBlogEn
          : BlogsServices.editBlogAr;

      await editBlog(blog.id, values);
      formikBag.resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const formikProps = useFormik({
    initialValues: {
      title: blog?.title || "",
      description: blog?.description || "",
      liked: blog?.liked || 0,
      unliked: blog?.unliked || 0,
    },
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

  return {
    formikProps,
  };
};

export default useEditForm;
