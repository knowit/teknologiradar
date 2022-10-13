import SvgKnowit from './SvgKnowit';
import SvgTechRadar from './SvgTechRadar';
import styles from './HeaderLogo.module.css';

const HeaderLogo = () => {
  return (
    <div className={styles.logo}>
      <SvgKnowit />
      <SvgTechRadar />
    </div>
  );
};

export default HeaderLogo;
