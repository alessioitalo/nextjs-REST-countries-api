import styled from 'styled-components';

const StyledMiniCard = styled.div`
  width: 100%;
  height: 24rem;
  cursor: pointer;
  background: ${(props) => props.theme.element};

  &:hover {
    transform: scale(1.01);
  }

  div:nth-of-type(2) {
    padding: 1rem;
  }

  span {
    font-weight: 600;
  }

  .name {
    font-weight: 800;
    font-size: 1.5rem;
  }

  .flag {
    width: 100%;
    height: 50%;
    background: yellow;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  @media (max-width: 600px) {

    font-size: 0.9rem;
    
    .name{
      font-size: 1.2rem;
    }
  }
`;

export default StyledMiniCard;
