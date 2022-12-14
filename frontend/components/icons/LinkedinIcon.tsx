import { memo } from 'react';

const LinkedinIcon = () => {
  return (
    <svg width="45" height="45" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <title>Linkedin</title>
      <path
        fill="currentColor"
        d="m60 0c-33.1 0-60 26.9-60 60s26.9 60 60 60 60-26.9 60-60c0-33.2-26.9-60-60-60zm-15 89.1h-15v-52.6h15zm-7-55.7c-3.9 0-7-3.1-7-7.1 0-3.9 3.2-7 7-7 3.9 0 7 3.2 7 7 0 3.9-3.1 7.1-7 7.1zm59.5 55.7h-15v-32.5c0-3.8-1.1-6.5-5.7-6.5-7.8 0-9.3 6.5-9.3 6.5v32.4h-15v-52.5h15v5c2.2-1.6 7.5-5 15-5 4.9 0 15 2.9 15 20.5z"
      />
    </svg>
  );
};

export default memo(LinkedinIcon);
