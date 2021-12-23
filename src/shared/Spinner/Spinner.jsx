import s from "./Spinner.module.css";

const Spinner = ({ image }) => {
  return <img src={image} className={s.spinner} alt="spinner" />;
};

export default Spinner;
