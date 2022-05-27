import React, { useEffect, useState } from 'react';
import AppHeader from './components/app-header/app-header'
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import styles from './App.module.css';

const url = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setApiData(data))
      .catch((error) => {
        console.error('Error', error);
      });
  }, []);

  return (
    <>
      <AppHeader />
      <div className={styles.wrapper}>
        { apiData && <BurgerIngredients apiData={apiData} /> }
        { apiData && <BurgerConstructor apiData={apiData} /> }
      </div>
    </>
  );
}

export default App;