import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.header__wrapper}>
      <h2 className={s.header__title}>NTUU</h2>
    </div>
  );
};

export default Header;
