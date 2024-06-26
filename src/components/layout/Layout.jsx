import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <>
      <Headers>
          <Link to="/">
            <Span>Home</Span>
          </Link>
          <Link to="/about">
            <Span>About Me</Span>
          </Link>
      </Headers>    
      <Outlet />
</>
  );
};

const Headers = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  position: fixed;
  width: 100%;
  height: 50px;
  backdrop-filter: blur(2px);
  @media (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    align-items: center;

  }
`;
const Span = styled.span`
  margin-top: 6px;
  font-size: 22px;
  color: #0a0a0a;
`;

export default Layout;
