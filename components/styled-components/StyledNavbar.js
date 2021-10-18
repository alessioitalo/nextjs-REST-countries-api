import styled from 'styled-components';

const StyledNavbar = styled.nav`
  width: 100%;
  padding: 2rem;
  background: ${(props) => props.theme.element};
  display: flex;
  justify-content: space-between;

  div{
      font-weight: 600;
  }

  span{
    cursor: pointer;
  }
`;
export default StyledNavbar;
