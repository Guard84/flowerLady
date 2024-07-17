import css from "./Navigation.module.css";

const Navigation = ({ children }) => {
  return (
    <nav className={css.nav}>
      <a href="#about" className={css.link}>
        Про нас
      </a>
      <a href="#catalog" className={css.link}>
        Наші послуги
      </a>
      <a href="#reviews" className={css.link}>
        Відгуки
      </a>
      <a href="#contacts" className={css.link}>
        Контакти
      </a>
      <address>
        <a href="tel:+380506898156">+380 50 689 8156</a>
        <p>м.Черкаси, бул Шевченка</p>
      </address>
      {children}
    </nav>
  );
};

export default Navigation;
