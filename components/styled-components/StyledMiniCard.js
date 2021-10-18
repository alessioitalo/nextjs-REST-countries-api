import styled from 'styled-components';

const StyledMiniCard = styled.div`
  background: ${(props) => props.theme.element};
  margin: 1%;
  width: 30%;
  height: 20rem;
  ${'' /* height: 30%; */}

  div:nth-of-type(2){
      padding: 1rem;
  }

  span{
      font-weight: 600;
  }

  .name{
      font-weight: 800;
      font-size: 1.5rem;
  }


  .flag{
      width: 100%;
      height: 50%;
      background-image: url(${props=>props.flag});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 0,0;
      ${'' /* background-position: cover; */}
  }
`;

export default StyledMiniCard;
