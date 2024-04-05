import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
      </header>
      <Outlet/>
      <footer>2222</footer>
    </>
  );
};

export default Layout;
