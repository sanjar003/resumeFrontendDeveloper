import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
// import Footer from "../../pages/footer/Footer";

const Layout = () => {
  return (
    <>
      <Headers>
        <Link to="/">
          <Span>Home</Span>
        </Link>
        <Link to="/about">
          <Span>About</Span>
        </Link>
      </Headers>
      <Outlet />

      <footer>2222</footer>
    </>
  );
};

const Headers = styled.header`
  height: 50px;
  background:#8121D0 ;
  backdrop-filter: blur(9px);
`;
const Span = styled.span`
  margin-top: 6px;
  font-size: 22px;
  margin-left: 15px;
  color: white;
`;

export default Layout;
