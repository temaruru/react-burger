import React from 'react';
import PropTypes from 'prop-types';
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";

const BurgerIngredients = (props) => {
  const dataArray = props.apiData.data;
  const [current, setCurrent] = React.useState('one');
  const formattedArray = [
    {
      name: 'Булки',
      items: dataArray.filter(item => item.type === 'bun')
    },
    {
      name: 'Соусы',
      items: dataArray.filter(item => item.type === 'sauce')
    },
    {
      name: 'Начинки',
      items: dataArray.filter(item => item.type === 'main')
    }
  ];

  return (
    <div className={`${styles.wrapper} mr-10`}>
      <h1 className="text text_type_main-large mt-10">Соберите бургер</h1>
      <div className={`${styles.tabs} mt-5`}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>Булки</Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>Соусы</Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>Начинки</Tab>
      </div>
      <div className={`${styles.content} custom-scroll`}>
        {formattedArray.map((ingredient, i) =>
          <React.Fragment key={i}>
            <h3 className="text text_type_main-medium mt-10">{ingredient.name}</h3>
            <div className={styles.content_list}>
              {ingredient.items.map((ingredient) =>
                <BurgerIngredient
                  key={ingredient._id}
                  {...ingredient}
                />
              )}
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

const BurgerIngredientsPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
})

const apiDataPropTypes = PropTypes.shape({
  data: PropTypes.arrayOf(BurgerIngredientsPropTypes.isRequired).isRequired,
  success: PropTypes.bool,
})

BurgerIngredients.propTypes = {
  apiData: apiDataPropTypes,
  setVisibilityModal: PropTypes.func,
  openModal: PropTypes.object,
}

export default BurgerIngredients;