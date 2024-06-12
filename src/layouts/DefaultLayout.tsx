import React from 'react';

interface Props {
  children?: React.ReactNode;
}

export const DefaultLayout: React.FC<Props> = ({ children }) => (
  <React.Fragment>{children ?? null}</React.Fragment>
);
