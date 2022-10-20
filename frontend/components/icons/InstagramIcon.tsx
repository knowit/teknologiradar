import { memo } from 'react';

const InstagramIcon = () => {
  return (
    <svg width="45" height="45" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
      <title>Instagram</title>
      <g fill="currentColor">
        <path d="m31.7 17.4v-3.6-.5h-.5-3.6v4.1z" />
        <path d="m22.4 27.1c2.4 0 4.3-1.9 4.3-4.3 0-.9-.3-1.8-.8-2.5-.8-1.1-2-1.8-3.5-1.8-1.4 0-2.7.7-3.5 1.8-.5.7-.8 1.6-.8 2.5 0 2.4 1.9 4.3 4.3 4.3" />
        <path d="m34.5 20.4v9.9c0 2.6-2.1 4.7-4.7 4.7h-14.8c-2.6 0-4.7-2.1-4.7-4.7v-9.9-4.9c0-2.6 2.1-4.7 4.7-4.7h14.9c2.6 0 4.7 2.1 4.7 4.7zm-12-20.2c-12.3 0-22.3 10-22.3 22.3s10 22.3 22.3 22.3 22.3-10 22.3-22.3-10-22.3-22.3-22.3z" />
        <path d="m29 22.8c0 3.7-3 6.6-6.6 6.6s-6.6-3-6.6-6.6c0-.9.2-1.7.5-2.5h-3.6v9.9c0 1.3 1 2.3 2.3 2.3h14.9c1.3 0 2.3-1 2.3-2.3v-9.9h-3.6c.2.8.4 1.7.4 2.5" />
      </g>
    </svg>
  );
};

export default memo(InstagramIcon);