import "./App.css";

import {
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import RootLayout from "./layout/RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
