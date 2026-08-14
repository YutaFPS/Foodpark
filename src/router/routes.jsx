import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Pagina1 from "../pages/Pagina1";
import Pagina2 from "../pages/Pagina2";
import Pagina3 from "../pages/Pagina3";
import TavernaPeriodica from "../pages/TavernaPeriodica";
import CerealKiller from "../pages/CerealKiller";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/taverna", element: <TavernaPeriodica />},
    {path: "/cereal", element: <CerealKiller />},
    {path: "/pagina3", element: <Pagina3 />},


])

export default router;
