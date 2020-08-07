import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primaryT);
  color: var(--white);
  
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  text-align: center;

  a {
    transition: opacity .3s;

    &:hover,
    &:focus {
      opacity: .5;
    }
  }
  
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
