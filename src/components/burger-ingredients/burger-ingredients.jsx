import React from 'react';
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import arrayData from '../../utils/data';

const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState('one');
  const formattedArray = [
  {
    name: 'Булки',
    items: arrayData.filter(item => item.type === 'bun')
  },
  {
    name: 'Соусы',
    items: arrayData.filter(item => item.type === 'sauce')
  },
  {
    name: 'Начинки',
    items: arrayData.filter(item => item.type === 'main')
  }]

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

export default BurgerIngredients;