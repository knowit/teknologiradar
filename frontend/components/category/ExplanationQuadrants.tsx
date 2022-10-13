import { useTranslation } from 'next-i18next';
import { memo } from 'react';
import styles from './ExplanationQuadrants.module.css';
interface ExplanationQuadrantProps {
  title: string;
  content: string;
}

const ExplanationQuadrant = ({ title, content }: ExplanationQuadrantProps) => {
  return (
    <div>
      <h3 className={styles.quadrantHeading}>{title}</h3>
      <p className={styles.quadrantContent}>{content}</p>
    </div>
  );
};

const ExplanationQuadrants = () => {
  const { t } = useTranslation('category');
  return (
    <aside>
      <h2>{t('explanationQuadrantTitle')}</h2>
      <div className={styles.quadrantWrapper}>
        <ExplanationQuadrant title={t('priorities.title')} content={t('priorities.explanation')} />
        <div className={styles.explanationQuadrants}>
          <div>
            <ExplanationQuadrant title={t('keep.title')} content={t('keep.explanation')} />
          </div>
          <div>
            <ExplanationQuadrant title={t('adopt.title')} content={t('adopt.explanation')} />
          </div>
          <div>
            <ExplanationQuadrant title={t('trial.title')} content={t('trial.explanation')} />
          </div>
          <div>
            <ExplanationQuadrant title={t('test.title')} content={t('test.explanation')} />
          </div>
        </div>

        <ExplanationQuadrant title={t('hold.title')} content={t('hold.explanation')} />
      </div>
    </aside>
  );
};

export default memo(ExplanationQuadrants);
