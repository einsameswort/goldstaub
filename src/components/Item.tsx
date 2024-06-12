import React from 'react';

interface Props {
  icon: React.ReactNode;
  name: string;
}

export const Item: React.FC<Props> = ({ icon, name }) => (
  <div className="item">
    {icon}
    <p className="item__name">{name}</p>
  </div>
);
