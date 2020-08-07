import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ContainerStyle = styled.div`
    position: relative;
    width: 3rem;
    height: 3rem;
`;

const circleStyle = {
    display: "block",
    width: "2.5rem",
    height: "2.5rem",
    border: "0.5rem solid #e9e9e9",
    borderTop: "0.5rem solid var(--primary)",
    borderRadius: "50%",
    position: "absolute",
    boxSizing: "border-box",
    marginTop: "10px",
    marginLeft: "25px",
    top: 0,
    left: 0,
  };
  
  const spinTransition = {
    loop: Infinity,
    ease: "linear",
    duration: 1
  };

export default function CircleLoader() {
    return (
        <ContainerStyle>
            <motion.span 
                style={circleStyle}
                animate={{ rotate: 360 }}
                transition={spinTransition}
            />
        </ContainerStyle>
    );
}