import "./style.css"

const Form = () => (
  <form className="js-form form">
    <input
      className="form__input"
      placeholder="Co jest do zrobienia?"
      type="text"
    />
    <button className="form__button">Dodaj zadanie</button>
  </form>
);

export default Form;