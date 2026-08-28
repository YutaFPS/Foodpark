import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";

import TavernaPeriodica from "../pages/TavernaPeriodica";
import CerealKiller from "../pages/CerealKiller";
import Carrinho from "../components/Carrinho";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/taverna", element: <TavernaPeriodica />},
    {path: "/cereal", element: <CerealKiller />},
    {path: "/carrinho", element: <Carrinho />},
    // {path: "/pagina3", element: <Pagina3 />},


])

export default router;
