import styled, { css } from 'styled-components';

export const MainWrapper = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px; 
    padding-left: 5%;
    padding-right: 5%;
    ${({ padding }) => css`
        padding: ${padding};
    `}
`;