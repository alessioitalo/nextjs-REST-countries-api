import styled from 'styled-components';

const StyledNavbar = styled.nav`
  width: 100%;
  padding: 2rem;
  background: ${(props) => props.theme.element};
  display: flex;
  justify-content: space-between;
  align-items: center;

  div{
      font-weight: 600;
  }

  span{
    width: 25%;
    cursor: pointer;
    display: flex;
    max-height: 2rem;
  }
`;
export default StyledNavbar;
