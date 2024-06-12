import React, { useState, useEffect } from 'react';

import { DefaultLayout } from '@layouts/DefaultLayout';

import { Item } from '@components/Item';
import { CraftingBox } from '@components/CraftingBox';

export const HomePage: React.FC = () => {
  const [gridState, setGridState] = useState<(string | null)[]>([]);

  useEffect(() => {
    setGridState(new Array(9).fill(null));
  }, []);

  const setItem = (index: number, icon: string) => {
    setGridState((prev) =>
      prev.map((value, valueIndex) => (valueIndex === index ? icon : value))
    );
  };

  return (
    <DefaultLayout>
      <h1>Home</h1>
      <div className="crafting">
        <div className="crafting__items">
          <Item icon={'red'} name="Item 1" />
          <Item icon={'green'} name="Item 2" />
          <Item icon={'blue'} name="Item 3" />
        </div>
        <div className="crafting__grid">
          {gridState.map((box, index) => (
            <CraftingBox
              key={index}
              currentItem={box}
              onDrop={(icon) => setItem(index, icon)}
            />
          ))}
        </div>
        <div className="crafting__result"></div>
      </div>
    </DefaultLayout>
  );
};
