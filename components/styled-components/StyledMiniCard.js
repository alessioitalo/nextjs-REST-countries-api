import styled from 'styled-components';

const StyledMiniCard = styled.div.attrs((props) => ({
  background: `${props.theme.background}`
}))`
  width: 100%;
  height: 25rem;
  cursor: pointer;

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

    @media (max-width: 700px) {
      height: 50vw;
    }
  }
`;

export default StyledMiniCard;
