import SvgKnowit from "./SvgKnowit";
import SvgTechRadar from "./SvgTechRadar";
import styles from "./HeaderLogo.module.css";
import { useTranslation } from "next-i18next";

const HeaderLogo = () => {
  const { t } = useTranslation("common");
  return (
    <div className={styles.logo} aria-label={t("homeLink")}>
      <SvgKnowit />
      <SvgTechRadar />
    </div>
  );
};

export default HeaderLogo;
