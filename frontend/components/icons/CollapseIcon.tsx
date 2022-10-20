import { memo } from 'react';

const CollapseIcon = () => {
  return (
    <svg width="15" height="15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 9V10H4.293L0 14.291L0.707 15L5 10.707V14H6V9H1Z" />
      <path d="M15 0.708L14.296 0L10 4.293V1H9V6H14V5H10.707L15 0.708Z" />
    </svg>
  );
};

export default memo(CollapseIcon);
