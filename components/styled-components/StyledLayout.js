import styled from 'styled-components';

const StyledLayout = styled.main`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  ${'' /* width: 100%; */}
  min-height: 100vh;
  ${'' /* padding: 0; */}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export default StyledLayout;
