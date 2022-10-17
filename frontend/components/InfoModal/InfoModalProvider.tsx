import React, { createContext, useContext, useState } from 'react';
import { InfoModal } from './index';

export interface InfoModalContent {
  title: string;
  message?: string;
  show?: boolean;
}

const initalContent: InfoModalContent = {
  title: '',
  message: '',
  show: false,
};

type InfoModalContextState = {
  open: (content: InfoModalContent) => void;
  close: () => void;
  modalContent: any;
};

const initalState: InfoModalContextState = {
  open: () => {},
  close: () => {},
  modalContent: {},
};

const InfoModalContext = createContext<InfoModalContextState>(initalState);
export const useInfoModal = () => useContext(InfoModalContext)!;

interface FeatureProviderOptions {
  children: React.ReactElement;
}

export const InfoModalProvider = ({ children }: FeatureProviderOptions) => {
  const [modalContent, setModalContent] = useState<InfoModalContent>(initalContent);

  const open = (content: InfoModalContent) => {
    setModalContent({
      ...content,
      ...{ show: true },
    });
  };

  const close = () => {
    setModalContent(initalContent);
  };

  return (
    <InfoModalContext.Provider value={{ open, close, modalContent }}>
      <InfoModal />
      {children}
    </InfoModalContext.Provider>
  );
};
