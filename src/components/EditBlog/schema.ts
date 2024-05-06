import * as yup from "yup";

interface validationSchema {
  title: string;
  description: string;
}
// Define validation schema for English language
export const validationSchemaEn = yup.object<validationSchema>().shape({
  title: yup
    .string()
    .required("Please enter your title")
    .max(50, "Maximum 50 characters allowed")
    .matches(/^[A-Za-z\s]+$/, "Letters only"),
  description: yup
    .string()
    .required("Please enter your description")
    .max(500, "Maximum 500 characters allowed"),
});

// Define validation schema for Arabic language
export const validationSchemaAr = yup.object<validationSchema>().shape({
  title: yup
    .string()
    .required("الرجاء إدخال العنوان")
    .max(50, "الحد الأقصى المسموح به 50 حرفًا")
    .matches(/^[ء-ي\s]+$/, "حروف فقط"),
  description: yup
    .string()
    .required("الرجاء إدخال الوصف")
    .max(500, "الحد الأقصى المسموح به 500 حرفًا")
    .matches(/^[ء-ي\s]+$/, "حروف فقط"),
});

// Function to get the validation schema based on the language
export const getValidationSchema = (language: string) => {
  switch (language) {
    case "en":
      return validationSchemaEn;
    case "ar":
      return validationSchemaAr;
    default:
      return validationSchemaEn; // Default to English schema
  }
};
