import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/"><h2>Home</h2></Link>
        <Link to="/about">about</Link>
      </header>
      <Outlet/>
      {/* <footer>2222</footer> */}
    </>
  );
};

export default Layout;
