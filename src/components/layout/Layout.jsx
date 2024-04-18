import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <>
      <div>
        <Link to="/">
          <Span>Home</Span>
        </Link>
        <Headers>
          <>
            <Link to="/about">
              <Span>About Me</Span>
            </Link>
          </>
        </Headers>
      </div>
      <Outlet />
    </>
  );
};

const Headers = styled.header`
  display: flex;
  position: fixed;
  width: 90%;
  height: 50px;
  backdrop-filter: blur(2px);
`;
const Span = styled.span`
  margin-top: 6px;
  font-size: 22px;
  color: #0a0a0a;
`;

export default Layout;
