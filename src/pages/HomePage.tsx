import React from 'react';

import { DefaultLayout } from '@layouts/DefaultLayout';

import { Item } from '@components/Item';

export const HomePage: React.FC = () => (
  <DefaultLayout>
    <h1>Home</h1>
    <div className="crafting">
      <div className="crafting__items">
        <Item
          icon={<div className="item__icon item__icon--red" />}
          name="Item 1"
        />
        <Item
          icon={<div className="item__icon item__icon--green" />}
          name="Item 2"
        />
        <Item
          icon={<div className="item__icon item__icon--blue" />}
          name="Item 3"
        />
      </div>
      <div className="crafting__grid">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div className="crafting__result"></div>
    </div>
  </DefaultLayout>
);
