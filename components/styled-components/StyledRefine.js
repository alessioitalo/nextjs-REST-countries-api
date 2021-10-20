import styled from 'styled-components';

const StyledRefine = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  width: 100%;

  .search,
  .filter,
  .regions {
    border-radius: 10px;
    background: ${(props) => props.theme.element};
    font-size: 0.8rem;
  }

  .search,
  .filter {
    display: flex;
    align-items: center;
    padding: 1rem;
  }

  .search {
    width: 40%;
  }

  .filter {
    cursor: pointer;
    width: 30%;
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  .regions {
    top: 100%;
    left: 0;
    position: absolute;
    z-index: 1;
    width: 100%;
  }

  .regions li{
    padding: 0.5rem 1rem;
    width: 100%;

    &:hover{
      background: ${(props) => props.theme.background};
    }
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
  }

  input::placeholder {
    color: ${(props) => props.theme.text};
    font-size: 0.8rem;
  }

  .filter {
    width: 20%;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    .search,
    .filter {
      margin: 0.5rem 0;
    }

    .search {
      width: 100%;
    }
    .filter {
      width: 60%;
    }
  }

  @media (max-width: 600px){
    .filter {
      width: 100%;
    }
  }
`;

export default StyledRefine;
