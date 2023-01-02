import React from "react";
import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { List, Nav, StyledNavLink, UnorderedList } from "./styled";

const App = () => (
  <HashRouter basename="/todo-list-react">
    <Nav>
      <UnorderedList>
        <List>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </List>
        <List>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </List>
      </UnorderedList>
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </Nav>
  </HashRouter>
);

export default App;
