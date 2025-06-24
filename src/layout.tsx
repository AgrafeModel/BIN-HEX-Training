import { Outlet } from "react-router-dom";
import { Link } from "./components/Link";
import BitwiseCheatSheet from "./components/cheatsheet";

export function Layout() {
  return (
    <div className="h-screen w-screen overflow-y-auto max-w-screen max-h-screen">
      <header className="bg-gray-800 text-white p-4 flex flex-row justify-between items-center">
        <Link to="/" className="text-xl text-gray-200 hover:text-gray-400">
          <img
            src={
              (import.meta.env.DEV ? "/" : "/BIN-HEX-Training/") +
              "binhexlogo.png"
            }
            alt="Logo"
            className="h-16 w-16 mr-2 bg-white rounded-lg hover:shadow-md hover:shadow-gray-400 transition-all duration-300"
          />
        </Link>
        <BitwiseCheatSheet />
      </header>
      <main className="h-full">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
