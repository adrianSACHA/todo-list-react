import { Sections, TasksList, TasksListHeader, TasksListBody } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Sections>
    <TasksList>
      <TasksListHeader>{title}</TasksListHeader>
      {extraHeaderContent}
    </TasksList>
    <TasksListBody>{body}</TasksListBody>
  </Sections>
);

export default Section;
