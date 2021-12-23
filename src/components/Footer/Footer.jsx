import s from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={s.wrapper}>
      <p>© 2021-2022. NTUU_LWP. All Rights Reserved.</p>
      <p>
        Developed by <a href="https://github.com/Artowod/">Artowod</a>
      </p>
    </div>
  );
};

export default Footer;
