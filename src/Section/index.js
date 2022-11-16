import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
  <section className="section">
    <header className="tasksList">
      <h2 className="tasksList__header">{title}</h2>
      {extraHeaderContent}
    </header>
    <div className="taskList__body">{body}</div>
  </section>
);

export default Section;
