import { Dialog } from '@reach/dialog';
import { useTranslation } from 'next-i18next';
import { useInfoModal } from './InfoModalProvider';
import styles from './InfoModal.module.css';
import { CloseIcon } from '../icons';

const InfoModal = () => {
  const { modalContent, close } = useInfoModal();
  const { t } = useTranslation('common');

  return (
    <>
      {modalContent && (
        <Dialog isOpen={modalContent.show} onDismiss={close} className={styles.wrapper}>
          <div className={styles.dialogHeader}>
            <h2 id="dialog-title" className={styles.dialogTitle}>
              {modalContent.title}
            </h2>
            <button onClick={close} className={styles.dialogButton}>
              <span>{t('dialog.close')}</span>
              <span aria-hidden>
                <CloseIcon />
              </span>
            </button>
          </div>
          <p aria-labelledby="dialog-title">{modalContent.message}</p>
        </Dialog>
      )}
    </>
  );
};

export default InfoModal;
