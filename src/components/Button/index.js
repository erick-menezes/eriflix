import styled from "styled-components";

const Button = styled.button`
    color: var(--white);
    border: 1px solid var(--primary);
    border-radius: 5px;
    background: var(--primary);
    outline: none;
    text-decoration: none;
    cursor: pointer;
    
    font-weight: bold;
    font-size: 16px;
    
    box-sizing: border-box;
    padding: 1rem;
    width: 9rem;
    height: 3rem;
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    transition: filter .3s;

    &:hover,
    &:focus {
        filter: brightness(0.8);
    }
`;

export default Button;