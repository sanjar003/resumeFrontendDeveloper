import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/"><span>Home</span></Link>
        <Link to="/about"><span>About</span></Link>
      </header>
      <Outlet/>
      {/* <footer>2222</footer> */}
    </>
  );
};

export default Layout;
