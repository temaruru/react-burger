import React from 'react';
import PropTypes from 'prop-types';
import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import arrayData from '../../utils/data';

const BurgerConstructor = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.constructor} mt-25`}>
        <div className="mr-6">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={arrayData[0].name}
            price={arrayData[0].price}
            thumbnail={arrayData[0].image_mobile}
          />
        </div>

        <div className={`${styles.inner} custom-scroll pr-2`}>
          {arrayData.filter((el) => el.type !== 'bun').map((el, i) =>
            <div className={styles.item}>
              <span className="mr-3">
                  <DragIcon />
              </span>
              <ConstructorElement
                text={el.name}
                price={el.price}
                thumbnail={el.image_mobile}
              />
            </div>
          )}
        </div>

        <div className="mr-6">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={arrayData[arrayData.length - 1].name}
            price={arrayData[arrayData.length - 1].price}
            thumbnail={arrayData[arrayData.length - 1].image_mobile}
          />
        </div>
      </div>
      <div className={`${styles.action} mt-10`}>
        <div className={`${styles.price} mr-10`}>
          <span className="text text_type_digits-medium mr-1">
              610
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  )
}

export default BurgerConstructor;