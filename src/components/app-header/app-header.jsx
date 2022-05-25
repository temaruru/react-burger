import styles from "./app-header.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <nav className={`${styles.nav} pt-4 pb-4`}>
          <a href="/" className={`${styles.link} ${styles.link_active} pr-5 pl-5 pt-4 pb-4`}>
            <BurgerIcon type="primary" />
            <span className="text text_type_main-default ml-2">Конструктор</span>
          </a>
          <a href="/" className={`${styles.link} pr-5 pl-5 pt-4 pb-4 ml-2`}>
            <ListIcon type="secondary" />
            <span className="text text_type_main-default ml-2">Лента заказов</span>
          </a>
        </nav>
        <div className={styles.logo}>
          <Logo />
        </div>
        <a href="/" className={`${styles.link} ${styles.link_profile} pr-5 pl-5 pt-4 pb-4`}>
          <ProfileIcon type="secondary" />
          <span className="text text_type_main-default ml-2">Личный кабинет</span>
        </a>
      </div>
    </header>
  )
}

export default AppHeader;