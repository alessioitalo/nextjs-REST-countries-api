import styled from 'styled-components';

const StyledDetailCard = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  span{
      align-self: flex-start;
  }

  .info {
    display: flex;
    width: 100%;
    justify-content: space-between;
    min-height: 50vh;
  }

  ${
    '' /* margin: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 100%; */
  }

  .flag {
    background-image: url(${(props) => props.flag});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 50%;
  }
`;

export default StyledDetailCard;
