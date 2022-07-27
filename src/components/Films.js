import styled from "styled-components";
import ViewerFilms from "./Viewer/ViewerFilms";

const Films = (props) => {
  return (
    <Container>
      <ViewerFilms />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 150px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Films;
