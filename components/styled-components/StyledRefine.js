import styled from 'styled-components';

const StyledRefine = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  width: 100%;

  .search {
    width: 40%;
    display: flex;
    padding: 1rem;
    align-items: center;
    border-radius: 10px;
    background: ${(props) => props.theme.element};
  }

  input {
    background: ${(props) => props.theme.element};
    width: 100%;
    outline: none;
    border: none;
    height: 100%;
    padding: 0 1rem;
    color: ${(props) => props.theme.text};
    font-family: 'Nunito Sans', sans-serif;
    font-size: 0.8rem;
  }

  .filter {
    width: 20%;
  }

  @media (max-width: 1000px) {
    .search {
      width: 100%;
    }
  }
`;

export default StyledRefine;
