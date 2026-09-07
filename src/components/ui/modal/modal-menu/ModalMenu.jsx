import { useEffect, useCallback, useState } from "react";

import styles from "./ModalMenu.module.css";

// import LanguageSwitcher from "@/providers/languages/LanguageSwitcher";
import LanguageSwitcher from "@/providers/langs/lang-uzb/LangSwitcher";

function ModalMenu({
  show,
  onClose,
  language,
  setLanguage,
  isMobile,
  children,
}) {
  const [isMounted, setIsMounted] = useState(show);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (show) {
      setIsMounted(true);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      const timer = setTimeout(() => {
        setIsMounted(false);
      }, 50);

      return () => clearTimeout(timer);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [show, handleKeyDown]);

  if (!isMounted) return null;

  const handleLinkClick = (callback) => {
    callback();
    onClose();
  };

  return (
    <div
      className={`${styles.overlay} ${show ? "show" : ""}`}
      onClick={onClose}
    >
      <aside
        className={`${styles.panel} ${!isMobile ? styles.panelVertical : ""}  ${show ? styles.open : styles.close}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* <button
          className="menu-close"
          onClick={onClose}
          aria-label="close menu"
        /> */}

        <div
          className={`${styles.languages} ${!isMobile ? styles.langVertical : ""}`}
        >
          <LanguageSwitcher
            language={language}
            setLanguage={setLanguage}
            isMobile={isMobile}
          />
        </div>

        <div>{children}</div>
      </aside>
    </div>
  );
}

export default ModalMenu;
