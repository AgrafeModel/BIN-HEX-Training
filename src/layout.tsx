import { Outlet } from "react-router-dom";
import { Link } from "./components/Link";

export function Layout() {
  return (
    <div className="h-screen w-screen overflow-y-auto max-w-screen max-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <Link to="/" className="text-xl text-gray-200 hover:text-gray-400">
          BIN HEX Training
        </Link>
      </header>
      <main className="h-full">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
