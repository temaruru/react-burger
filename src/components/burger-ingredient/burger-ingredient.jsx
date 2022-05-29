import React, { useState } from "react";
import PropTypes from 'prop-types';
import styles from "./burger-ingredient.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

const BurgerIngredient = (props) => {
  const [VisibilityModal, setVisibilityModal] = useState(false);

  return (
    <>
      <article className={`${styles.block}`} onClick={() => setVisibilityModal(true)}>
        <div className={styles.indicator}>
          <Counter count={1} size="default" />
        </div>
        <div className="pr-4 pl-4">
          <img
            src={props.image}
            alt={props.name}
          />
        </div>
        <div className={`${styles.price} mt-1`}>
          <span className="text text_type_digits-default mr-1">
              {props.price}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-default mt-1">
          {props.name}
        </p>
      </article>
      {VisibilityModal && <Modal setVisibilityModal={setVisibilityModal} title="Детали ингредиента"><IngredientDetails {...props} /></Modal>}
    </>
  )
}

BurgerIngredient.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default BurgerIngredient;