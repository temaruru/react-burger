import React, { useState } from "react";
import PropTypes from 'prop-types';
import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

const BurgerConstructor = (props) => {
  const dataArray = props.apiData.data;
  const [VisibilityModal, setVisibilityModal] = useState(false);
  const bun = dataArray.find(({ type }) => type === 'bun');

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.constructor} mt-25`}>
        <div className="mr-6">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bun.name}
            price={bun.price}
            thumbnail={bun.image_mobile}
          />
        </div>

        <div className={`${styles.inner} custom-scroll pr-2`}>
          {dataArray.filter((el, i) => el.type !== 'bun').map((el, i) =>
            <div
              key={i}
              className={styles.item}
            >
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
            text={bun.name}
            price={bun.price}
            thumbnail={bun.image_mobile}
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
        <Button type="primary" size="large" onClick={() => setVisibilityModal(true)}>
          Оформить заказ
        </Button>
      </div>
      {VisibilityModal && <Modal setVisibilityModal={setVisibilityModal} title=""><OrderDetails/></Modal>}
    </div>
  )
}

const BurgerConstructorPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
})

const apiDataPropTypes = PropTypes.shape({
  success: PropTypes.bool,
  data: PropTypes.arrayOf(BurgerConstructorPropTypes.isRequired).isRequired,
})

BurgerConstructor.propTypes = {
  apiData: apiDataPropTypes,
  setVisibilityModal: PropTypes.func,
  openModal: PropTypes.object,
}

export default BurgerConstructor;