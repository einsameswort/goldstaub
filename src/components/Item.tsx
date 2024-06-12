import React from 'react';
import { useDrag } from 'react-dnd';

interface Props {
  id: number;
  icon: string;
  name: string;
}

export const Item: React.FC<Props> = ({ id, icon, name }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CRAFTING_ITEM',
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div className="item">
      <div
        className={`item__icon item__icon--${icon}`}
        ref={drag}
        style={{ opacity: isDragging ? 0.5 : 1 }}
      />
      <p className="item__name">{name}</p>
    </div>
  );
};
