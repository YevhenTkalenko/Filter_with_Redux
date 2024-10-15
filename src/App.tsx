import Filter from "./Components/Filter/Filter";
import PostList from "./Components/PostList/PostList";
import { Container } from "./Container/Container";

interface Props {}

const App = (props: Props) => {
  return (
    <Container>
      <Filter />
      <PostList />
    </Container>
  );
};
export default App;
