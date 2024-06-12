import React from 'react';

import { DefaultLayout } from '@layouts/DefaultLayout';

export const HomePage: React.FC = () => (
  <DefaultLayout>
    <h1>Home</h1>
    <div className="crafting">
      <div className="crafting__items">
        <div className="crafting__item">
          <div className="crafting__item__icon crafting__item__icon--red"></div>
          <p className="crafting__item__name">Item 1</p>
        </div>
        <div className="crafting__item">
          <div className="crafting__item__icon crafting__item__icon--green"></div>
          <p className="crafting__item__name">Item 2</p>
        </div>
        <div className="crafting__item">
          <div className="crafting__item__icon crafting__item__icon--blue"></div>
          <p className="crafting__item__name">Item 3</p>
        </div>
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
