import styled from "styled-components";
import ImgSlider from "./ImgSlider";


const Info = (props) => {
  return (
    <Container>

      {/* <ImgSlider /> */}
    </Container>

  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);


  &:after {
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Info;