import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/layout/Layout";
import { FavoritesProvider } from "./context/FavoritesContext";
import NotFound from "./pages/NotFound";
import ListProperty from "./pages/ListProperty";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import Favorites from "./pages/Favourites";
import Agents from "./pages/Agents";
import AgentDetails from "./pages/AgentDetails";
import About from "./pages/About";
import WhyChooseNestora from "./components/home/WhyNestora";

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter basename="/Nestora">
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:id" element={<PropertyDetails />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/agents/:id" element={<AgentDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="" element={<WhyChooseNestora/>} />
            <Route path="/list-property" element={<ListProperty />} />

            <Route path="*" element={<NotFound />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
    
  );
}

export default App;