import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({
    title,
    description,
    leftBtnText,
    rightBtnText,
    backgroundImg,
}) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>

            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>{leftBtnText}</LeftButton>
                        {rightBtnText && (
                            <RightButton>{rightBtnText}</RightButton>
                        )}
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg"></DownArrow>
            </Buttons>
        </Wrap>
    );
}

export default Section;

const Wrap = styled.div`
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${(prop) => `url('/images/${prop.bgImage}')`};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const ItemText = styled.div`
    padding-top: 15vh;
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
`;
const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`;

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`;

const Buttons = styled.div``;
