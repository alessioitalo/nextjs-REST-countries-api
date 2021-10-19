import styled from 'styled-components';

const StyledNavbar = styled.nav`
  width: 100%;
  padding: 2rem;
  background: ${(props) => props.theme.element};
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    font-weight: 600;
  }

  .switcher {
    width: 25%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    width: 100%;
  }
  @media (max-width: 1000px) {
    font-size: 0.8rem;
    padding: 1rem 0.5rem;
    .switcher {
      width: 50%;
      justify-content: flex-end;
      align-items: center;

    }
  }

  @media (max-width: 700px) {
    font-size: 0.6rem;

  }
`;
export default StyledNavbar;
