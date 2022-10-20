import { memo } from 'react';

const ExpandIcon = () => {
  return (
    <svg width="15" height="15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 0V1H12.293L8 5.291L8.707 6L13 1.707V5H14V0H9Z" />
      <path d="M6 8.708L5.296 8L1 12.293V9H0V14H5V13H1.707L6 8.708Z" />
    </svg>
  );
};

export default memo(ExpandIcon);
