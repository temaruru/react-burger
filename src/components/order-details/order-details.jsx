import React from "react";
import icon from "../../images/success-icon.svg"
import styles from "./order-details.module.css";

const OrderDetails = () => {
  return (
    <div className={`${styles.content} mb-4`}>
      <h2 className={`${styles.heading} text text_type_digits-large mt-15 mb-8`}>
        034536
      </h2>
      <p className="text text_type_main-medium mb-15">
        идентификатор заказа
      </p>
      <img src={icon} alt="Success" className="mb-15" />
      <p className="text text_type_main-medium mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-medium text_color_inactive mb-20">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  )
};

export default OrderDetails;