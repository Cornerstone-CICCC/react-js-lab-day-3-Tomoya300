import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="m-0 p-0 min-h-screen h-full w-full flex flex-col">
      {/* Header and Footer are always displayed */}
      <Header firstname="Tomoya"/>
      <main className="flex flex-1 flex-col p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout;