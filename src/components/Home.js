import styled from "styled-components";
import Viewers from "./Viewer/Viewers";


const Home = (props) => {
  return (
    <Container>
      {/* <ImgSlider /> */}
      <Viewers />
    </Container>

  );
};

const Container = styled.main`
  position: relative;
  /* left: 180px;
  right:180px; */
  min-height: calc(100vh - 250px);
  overflow-x: show;
  display: block;
  top: 150px;
  padding: 0 calc(3.5vw + 5px);


  &:after {
    /* background: url("/images/jade-stephens-WhVO1xKiDVw-unsplash.jpg") center center / cover
      no-repeat fixed; */
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
