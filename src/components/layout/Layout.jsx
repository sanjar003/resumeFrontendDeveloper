import { Link, Outlet } from "react-router-dom";
import styled from 'styled-components'

const Layout = () => {
  return (
    <>
      <Headers>
        <Link to="/"><span>Home</span></Link>
        <Link to="/about"><span>About</span></Link>
      </Headers>
      <Outlet/>
      {/* <footer>2222</footer> */}
    </>
  );
};

const Headers = styled.header`
  height: 200px;
  background: black;
`

export default Layout;
