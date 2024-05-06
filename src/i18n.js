// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// i18n
//   .use(initReactI18next) // Initialize i18next
//   .init({
//     resources: {
//       en: {
//         translation: {
//           blogs: "Blogs",
//           addBlogs: "Add Blogs",
//           totalLiked: "Total Liked",
//           totalUnliked: "Total Unliked",
//           loading: "Loading...",
//           error: "Error:",
//           currentlyBlogs: "Currently Blogs:",
//           editBlogs: "Edit Blogs",
//           viewDetails: "View Details",
//           liked: "Liked",
//           unliked: "Unliked",
//           delete: "Delete",
//           title: "Title (maximum 50 characters, letters only)",
//           description: "Description (maximum 500 characters)",
//           footer:
//             "© 2024 Onextrapixel. Handcrafted in Singapore. All Rights Reserved.",
//           submit: "Submit",
//         },
//       },
//       ar: {
//         translation: {
//           blogs: "المدونات",
//           addBlogs: "إضافة المدونات",
//           totalLiked: "إجمالي الإعجابات",
//           totalUnliked: "إجمالي عدم الإعجاب",
//           loading: "جار التحميل...",
//           error: "خطأ:",
//           currentlyBlogs: "المدونات حاليًا:",
//           editBlogs: "تعديل المدونة",
//           viewDetails: "عرض التفاصيل",
//           liked: "أعجبني",
//           unliked: "لم يعجبني",
//           delete: "حذف",
//           title: " (أقصى عدد 50 حرف ,و حروف فقط)العنوان",
//           description: "(أقصى عدد 500 حرف)الوصف",
//           footer:
//             "© 2024واحد إضافي. مصنوع يدويًا في سنغافورة. كل الحقوق محفوظة",
//           submit: "اضافة",
//         },
//       },
//     },
//     lng: "en", // Default language
//     fallbackLng: "en", // Fallback language
//     interpolation: {
//       escapeValue: false, // React already does escaping
//     },
//   });

// export default i18n;
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";


import translationEN from "./locales/en.json";
import translationAR from "./locales/ar.json";


const resources = {
  en: {
    translation:  translationEN
  },
  ar: {
    translation: translationAR
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false 
    },
    react:{
        useSuspense:false
    }
  });

  export default i18n;