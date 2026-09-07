import { useCallback } from "react";
import useLanguage from "@/hooks/useLanguage";

export const useErrorMessage = () => {
  const { language } = useLanguage();

  const showErrorMessage = useCallback(() => {
    console.log(
      language === "en"
        ? "Error receiving data"
        : language === "uz"
          ? "Xatolik yuz berdi"
          : "Ошибка при получении данных",
    );
  }, [language]);

  return showErrorMessage;
};

// export const useErrorMessage = () => {
//   const { language } = useLanguage();

//   console.log(
//     language === "en"
//       ? "Error receiving data"
//       : language === "uz"
//         ? "Xatolik yuz berdi"
//         : "Ошибка при получении данные",
//   );
// };
