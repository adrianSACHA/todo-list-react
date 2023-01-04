import { toAuthor, toTasks } from "../routes";
import { List, Nav, StyledNavLink, UnorderedList } from "./styled";


const Navigation = () => {
  return (
    <Nav>
      <UnorderedList>
        <List>
          <StyledNavLink to={toTasks}>Zadania</StyledNavLink>
        </List>
        <List>
          <StyledNavLink to={toAuthor}>O autorze</StyledNavLink>
        </List>
      </UnorderedList>
    </Nav>
  );
};

export default Navigation;
