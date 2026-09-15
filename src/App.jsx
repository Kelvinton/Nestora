import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import { FavoritesProvider } from "./context/FavoritesContext";

import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import Favorites from "./pages/Favourites";
import Agents from "./pages/Agents";
import AgentDetails from "./pages/AgentDetails";
import About from "./pages/About";

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Routes>

          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:id" element={<PropertyDetails />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/agents/:id" element={<AgentDetails />} />
            <Route path="/about" element={<About />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
    
  );
}

export default App;