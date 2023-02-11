import { createBrowserRouter } from "react-router-dom";
import Home from "./Presentation/Pages/Home/Home";
import Invocador from "./Presentation/Pages/Buil/Invocador";
import Support from './Presentation/Pages/Sup/Support';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }, 
  {
    path: "/Invocador",
    element: <Invocador/>

  },
  {
    path: "/Support",
    element: <Support/>

  }
]);

export default router;
