import React from 'react';

import { DefaultLayout } from '@layouts/DefaultLayout';

import { Item } from '@components/Item';
import { CraftingBox } from '@components/CraftingBox';

export const HomePage: React.FC = () => (
  <DefaultLayout>
    <h1>Home</h1>
    <div className="crafting">
      <div className="crafting__items">
        <Item id={0} icon={'red'} name="Item 1" />
        <Item id={1} icon={'green'} name="Item 2" />
        <Item id={2} icon={'blue'} name="Item 3" />
      </div>
      <div className="crafting__grid">
        <CraftingBox onDrop={() => null} />
        <CraftingBox onDrop={() => null} />
        <CraftingBox onDrop={() => null} />
        <CraftingBox onDrop={() => null} />
        <CraftingBox onDrop={() => null} />
        <CraftingBox onDrop={() => null} />
        <CraftingBox onDrop={() => null} />
        <CraftingBox onDrop={() => null} />
        <CraftingBox onDrop={() => null} />
      </div>
      <div className="crafting__result"></div>
    </div>
  </DefaultLayout>
);
