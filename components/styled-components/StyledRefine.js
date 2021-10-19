import styled from 'styled-components';

const StyledRefine = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  width: 100%;

  .search{
      width: 40%;
  }
  .filter{
      width: 20%;
  }
  input,
  input::placeholder,
  select {
    background: ${(props) => props.theme.element};
    color: ${(props) => props.theme.text};
    padding: 1rem;
    width: 100%;
  }

  @media(max-width: 600px){
    flex-direction: column;
    height: 25%;

    .search{
        width: 100%;
    }
    .filter{
        width: 60%;
    }
  }
  
`;
export default StyledRefine;
