import React from "react";
import PropTypes from "prop-types";
import styles from "./ingredient-details.module.css";

const IngredientDetails = (props) => {
  return (
    <div className={`${styles.content} mb-5`}>
      <img src={props.image_large} alt={props.name} />
      <h3 className="text text_type_main-medium mt-4 mb-8">
        {props.name}
      </h3>
      <div className={styles.block}>
        <div className={styles.block_row}>
          <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
          <p className="text text_type_digits-default text_color_inactive">{props.calories}</p>
        </div>
        <div className={styles.block_row}>
          <p className="text text_type_main-default text_color_inactive">Белки, г</p>
          <p className="text text_type_digits-default text_color_inactive">{props.proteins}</p>
        </div>
        <div className={styles.block_row}>
          <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
          <p className="text text_type_digits-default text_color_inactive">{props.fat}</p>
        </div>
        <div className={styles.block_row}>
          <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
          <p className="text text_type_digits-default text_color_inactive">{props.carbohydrates}</p>
        </div>
      </div>
    </div>
  )
};

IngredientDetails.propTypes = {
  name: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
}

export default IngredientDetails;