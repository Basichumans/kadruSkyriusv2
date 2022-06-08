import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import ViewersAds from "./ViewerAds";



const Ads = (props) => {
  return (
    <Container>
      <ViewersAds />
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
   /* ÷ background: url("/images/merlin_198051936_85fe1347-4a63-431b-aefd-ab8922f73215-superJumbo.jpg.webp") center center / cover */
      /* no-repeat fixed; */
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Ads;