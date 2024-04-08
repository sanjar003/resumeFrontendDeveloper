import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
// import Footer from "../../pages/footer/Footer";

const Layout = () => {
  return (
    <>
      <Headers>
        <div>
          <Link to="/">
            <Span>Home</Span>
          </Link>

          <Link to="/about">
            <Span>About</Span>
          </Link>
        </div>
        <div>
          <Link to="project">
            <Span>MyProject</Span>
          </Link>
        </div>
      </Headers>
      <Outlet />
      {/* <footer>2222</footer> */}
    </>
  );
};

const Headers = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 50px;
  /* color: black; */
  /* background: #8121d0; */
  backdrop-filter: blur(2px);
`;
const Span = styled.span`
  margin-top: 6px;
  font-size: 22px;
  margin-left: 15px;
  color: #0a0a0a;
`;

export default Layout;
