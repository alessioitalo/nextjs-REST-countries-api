import Navbar from './Navbar';
import StyledLayout from './styled-components/StyledLayout';
const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Navbar/>
      {children}
    </StyledLayout>
  );
};

export default Layout;
