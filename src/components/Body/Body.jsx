import logo from "../../images/logo.svg";
import hero from "../../images/hero.jpg";
import s from "./Body.module.css";
import SimpleSlider from "../SimpleSlider";

const Body = () => {
  return (
    <section className={s.body}>
      <div className={s.wrapper}>
        <h2 className={s.title}>«Дослідження електромеханічних систем з використанням комп’ютерних технологій»</h2>
        <p className={s.subTitle}>ДНВР. July 20, 2020</p>
        <img src={hero} className={s.hero} alt="NTUU-MMI" />
        <h3 className={s.descriptionTitle}>Чим займаються учасники гуртка:</h3>
        <p className={s.description}>
          Сама назва гуртка засвідчує тематику і спрямування його діяльності: в умовах фактичної відсутності
          фінансування для придбання новітнього лабораторного обладнання студенти - гуртківці виконують творчу роботу по
          розробці, відновленню та модернізації лабораторного обладнання з використання програмних засобів вимірювання,
          реєстрації та відображення сигналів датчиків механічних та електричних величин.
        </p>
        <div className={s.line}></div>
        <h3 className={s.descriptionTitle}>
          Вибрані роботи студентського наукового гуртка «Дослідження електромеханічних систем з використанням
          комп’ютерних технологій» за 2015-2020 роки.
        </h3>
        <div className={s.slider}>
          <SimpleSlider />
        </div>
        <p className={s.description}></p>
      </div>
    </section>
  );
};

export default Body;
