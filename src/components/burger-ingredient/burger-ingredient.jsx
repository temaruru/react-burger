import PropTypes from 'prop-types';
import styles from "./burger-ingredient.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerIngredient = (props) => {
  return (
    <>
      <article className={`${styles.block}`}>
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
    </>
  )
}

// BurgerIngredient.propTypes = {
//   name: PropTypes.string,
//   price: PropTypes.number,
//   image: PropTypes.string,
// }

export default BurgerIngredient;