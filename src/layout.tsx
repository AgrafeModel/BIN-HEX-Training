import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="h-screen w-screen overflow-y-auto max-w-screen max-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <a className="text-xl text-gray-200 hover:text-gray-400" href="/">
          BIN HEX Training
        </a>
      </header>
      <main className="h-full">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
