import React from 'react';
import { useDrop } from 'react-dnd';

interface Props {
  currentItem: string | null;
  onDrop: (icon: string) => void;
}

export const CraftingBox: React.FC<Props> = ({ currentItem, onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'CRAFTING_ITEM',
    drop: (item: { icon: string }) => onDrop(item.icon),
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
    >
      {currentItem !== null ? (
        <div
          className={`crafting-box__item crafting-box__item--${currentItem}`}
        />
      ) : null}
    </div>
  );
};
