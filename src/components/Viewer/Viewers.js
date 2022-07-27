import styled from "styled-components";
import React, { useState,useCallback } from "react";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import PopHoofsOnSkates from "../popup/popHoofsOnSkates.jsx";
import { BrowserRouter as Router, Routes, Route, Link ,useNavigate} from "react-router-dom";
// import NightDayOff from "../videoPages/cityMonster.js";

const Viewers = (props, { onClick }) => {
  const [openPopup, setOpenPopup] = useState(false);
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/cityMonster', {replace: true}), [navigate]);

  return (
    <Container>
      <PopHoofsOnSkates open={openPopup} onClose={() => setOpenPopup(false)} />

      {/*  */}

      <Wrap
        onClick={() => setOpenPopup(true)}
        ratio={"grid-column: 1/5;grid-row:1/ 1;"}
      >
        <img src="/images/onskatesframe0.jpg" alt="" />
        <video autoPlay loop muted object-fit>
          <source src="/videos/hoofsOnSkates.mp4" type="video/mp4" />
        </video>
      </Wrap>

      <Wrap onClick={handleOnClick} ratio={"grid-column: 1/5;grid-row:3/ 3;"}>
        <img src="/images/2frame0.jpg" alt="" />
        <video autoPlay loop muted object-fit>
          <source
            src="/videos/day off be garso sumazintas.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>

      <Wrap ratio={"grid-column: 1/5;grid-row:5/ 5;"}>
        <img src="/images/2frame0.jpg" alt="" />
        <video autoPlay loop muted object-fit>
          <source
            src="/videos/day off be garso sumazintas.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>

      <Wrap>
        <img src="/images/1frame0.jpg" alt="" />
        <video autoPlay loop muted>
          <source src="/videos/credit sumazintas.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/3frame0.jpg" alt="" />
        <video autoPlay loop muted>
          <source src="/videos/RIDO sumazintas.mp4" type="video/mp4" />
        </video>
      </Wrap>

      <Wrap>
        <img src="/images/4frame0.jpg" alt="" />
        <video autoPlay loop muted>
          <source src="/videos/pildyk sumazintaas.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/5frame0.jpg" alt="" />
        <video autoPlay loop muted>
          <source src="/videos/kietaviskes sumazinta.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/6frame0.jpg" alt="" />
        <video autoPlay loop muted>
          <source src="/videos/Draudimas.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/7frame0.jpg" alt="" />
        <video autoPlay loop muted>
          <source
            src="/videos/Scanorama sumazintas su garsu.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>

      <Wrap>
        <img src="/images/9frame0.jpg" alt="" />
        <video autoPlay loop muted>
          <source src="/videos/ScanO.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/10frame0.jpg" alt="" />
        <video autoPlay loop muted>
          <source src="/videos/Bakst sumažintas.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/11frame0.jpg" alt="" />
        <video autoPlay loop muted>
          <source src="/videos/piratai sumazinti.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/12frame0.jpg" alt="" />
        <video autoPlay loop muted>
          <source src="/videos/mazule sumazintas.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/13frame0.jpg" alt="" />
        <video autoPlay loop muted>
          <source src="/videos/neste sumazinta.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/14frame0.jpg" alt="" />
        <video autoPlay loop muted>
          <source src="/videos/Eco denta sumažintas.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/15frame0.jpg" alt="" />
        <video autoPlay loop muted>
          <source src="/videos/smile sumazinttas.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/16frame0.jpg" alt="" />
        <video autoPlay loop muted>
          <source src="/videos/gele.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/17frame0.jpg" alt="" />
        <video autoPlay loop muted>
          <source src="/videos/O sumazinta.mp4" type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 8px 8px;
  gap: 8px;
  /* grid-template-columns:repeat(4, 300px); */
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-flow: dense;
  /* grid-template-columns:1rf 1rf 1rf; */
  /* grid-template-rows:25%; */
  /* grid-template-columns:repeat(3,1fr);
    grid-template-rows:repeat(3,1fr); */
  justify-content: center;
  place-items: center stretch;
  /* justify-items:; */
  margin-left: 10%;
  margin-right: 10%;

  ${(props) => props.ratio}
  ${(props) => props.size} 

    @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0, 1fr) !important);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr) !important);
  }
`;

const Wrap = styled.div`
/* padding-top: 100%; */
/* width:150px;*/
    /* height:100px;  */
    display:grid;
    /* grid-column: 1 / 4; */   
    ${(props) => props.ratio}
    object-fit:fill;
    /* border-radius: 16px; */
    /* box-shadow: 1px 5px 10px -6px rgba(0,0,0,0.62); */
    cursor:pointer;
    /* overflow: hidden; */
    /* position:relative; */
    transition: all 250ms cubic-bezier(0.25,0.45,0.45,0.94)0s;
    border: solid 1px rgba(1,1,1,0.0);
    position: relative;

img{
    /* inset:0px; */
    /* height:150px;
    width:150px; */

    /* border-radius:12px; */
    /* filter:grayscale(100%); */
    max-width: 100%;
    object-fit:fill;
    opacity:1;
    /* position:absolute; */
    transition: opacity 500ms ease-in-out 0s ;
    z-index:1;
    &:hover{
        opacity:0;
    }
}
video {
    /* width:150px;
    height:150px; */
    position:absolute;
    /* border-radius:16px; */

    max-width: 100%;
    size:fit;
    top:0;
    opacity:1;
    z-index:0:
    

}
/* &:hover */
`;

export default Viewers;
