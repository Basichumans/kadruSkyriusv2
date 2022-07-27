import styled from 'styled-components'
import React from 'react';
import ReactPlayer from 'react-player'


const ViewerFilms = (props) => {

    return (<Container >

        <Wrap  >
            <img src='/images/onskatesframe0.jpg' alt='' />
            <video autoPlay loop muted object-fit >
                <source src='/videos/hoofsOnSkates.mp4' type='video/mp4' />
            </video>
        </Wrap>

        <Wrap  >
            <img src='/images/2frame0.jpg' alt='' />
            <video autoPlay loop muted object-fit >
                <source src='/videos/day off be garso sumazintas.mp4' type='video/mp4' />
            </video>
        </Wrap>



    </Container>
    );
};

const Container = styled.div`
    margin-top: 30px;
    padding:30px 0px 26px;
    display:grid;
    grid-gap:8px 8px;
    gap: 8px;
    /* grid-template-columns:repeat(4, 300px); */
    grid-template-columns:repeat(1, minmax(0,1fr));
    grid-auto-flow: dense;
    /* grid-template-columns:1rf 1rf 1rf; */
    /* grid-template-rows:25%; */
    /* grid-template-columns:repeat(3,1fr);
    grid-template-rows:repeat(3,1fr); */
    justify-content: center;
    place-items:center stretch;
    /* justify-items:; */
    margin-left:10%;
    margin-right:10%; 

    ${props => props.ratio}

    @media (max-width: 1200px){grid-template-columns:repeat(1, minmax(0,1fr));}
    @media (max-width: 768px){grid-template-columns:repeat(1, minmax(0,1fr));}

`;



const Wrap = styled.div`
/* padding-top: 100%; */
/* width:150px;
height:150px; */
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

export default ViewerFilms;
