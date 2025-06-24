import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Layout } from "./layout";
import { ExoListPage } from "./routes/exo-list";
import { ErrorPage } from "./error";
import { ExoPage } from "./routes/exo-page";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<ExoListPage />} />
      <Route path="/exo/:id" element={<ExoPage />} />
    </Route>,
  ),
  {
    basename: "/BIN-HEX-Training/",
  },
);
