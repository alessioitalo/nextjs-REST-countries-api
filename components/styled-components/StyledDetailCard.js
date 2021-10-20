import styled from 'styled-components';

const StyledDetailCard = styled.div`
  width: 90%;
  margin: 1rem 0;
  height: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;


  .name {
    font-size: 2rem;
    font-weight: 800;
  }

  .back {
    align-self: flex-start;
    padding: 0.5rem 1.5rem;
    background: ${(props) => props.theme.element};
    cursor: pointer;
    display: flex;
    justify-content: center;
  }

  svg {
      position: relative;
      top: 2px;
      margin-right: 10px;
  }

  .info {
    padding: 1rem 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    min-height: 50vh;
  }

  .details {
    display: flex;
    flex-direction: column;
    width: 45%;
  }

  .details div {
    display: flex;
    justify-content: space-between;
    line-height: 2rem;
  }

  .flag {
    background-image: url(${(props) => props.flag});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 50%;
  }

  span {
    font-weight: 800;
  }

  .border{
    font-weight: 400;
    background: ${(props) => props.theme.element};
    padding: 0 1rem;
    margin: 0 0.5rem;
    cursor: pointer;
  }

  @media(max-width:1000px){
    font-size: 0.8rem;

    .info{
      flex-direction: column;
    }

    .back{
      margin: 1rem 0;
      font-size: 0.8rem;
      padding: 0.5rem;
    }


    .flag, .details{
      margin: 1rem 0;
      width: 100%;

    }

    .flag{
      min-height: 50vw;
    }
    
    .details div{
      flex-direction: column;
  }
  
  svg{
    top: 0;
  }

`;

export default StyledDetailCard;
