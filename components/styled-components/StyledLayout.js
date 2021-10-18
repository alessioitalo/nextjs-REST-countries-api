import styled from 'styled-components';

const StyledLayout = styled.main`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
`;

export default StyledLayout;
