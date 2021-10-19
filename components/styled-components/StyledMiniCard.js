import styled from 'styled-components';

const StyledMiniCard = styled.div`
  background: ${(props) => props.theme.element};
  margin: 2% 1%;
  width: 23%;
  height: 25rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.01)
  }

  @media (max-width: 1000px) {
    width: 48%;
  }
  @media (max-width: 700px) {
    width: 100%;
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
    background-image: url(${(props) => props.flag});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export default StyledMiniCard;
