import styled from "styled-components";
import React from "react";

const ViewersInfo = (props) => {
    return (
        <Container>

            <Wrap>
                <div>
                    <p1>
                        lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quidem.
                    </p1>
                </div>
            </Wrap>

        </Container>
    );
};

const Container = styled.div`
align-items: center;
 
`;

const Wrap = styled.div`


p1{
    margin-top: 15%;
    display:flex;
    justify-content: center;
    /* border-radius:12px; */
    pointer: cursor;
    /* max-width: 100%; */
    /* object-fit:fill; */
    /* opacity:1; */
    /* position:absolute; */
    /* transition: opacity 1000ms ease-in-out 0s ; */
    /* z-index:1; */
    /* &:hover{
        pointer: cursor;
        opacity:0;
    } */
}


/* &:hover */
`;

export default ViewersInfo;
