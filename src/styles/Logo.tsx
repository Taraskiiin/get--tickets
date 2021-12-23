import styled from 'styled-components';

export const NavLink = styled.a`
  margin: 50px auto;
  width: 20%;
  img {
    max-width: 150px;
    height: 100%;
  }
  @media ${(props) => props.theme.device.tablet} {
    width: 35%;
  }
`;
