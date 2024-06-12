import React from 'react';
import { useDrop } from 'react-dnd';

interface Props {
  onDrop: (id: number) => void;
}

export const CraftingBox: React.FC<Props> = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'CRAFTING_ITEM',
    drop: (item: { id: number }) => onDrop(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      className="crafting-box"
      ref={drop}
      style={{
        backgroundColor: isOver ? 'rgba(128, 128, 128, 0.4)' : undefined,
      }}
    ></div>
  );
};
