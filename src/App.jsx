import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Landing/Home";
import { Features } from "./pages/Landing/Features";
import { Pricing } from "./pages/Landing/Pricing";
import { SellWithUs } from "./pages/Landing/SellWithUs";
import { Agency } from "./pages/Client/Agency";
import { Network } from "./pages/Client/Network";
import { Clients } from "./pages/Client/Clients";
import { AgencyDetail } from "./pages/Client/Agency/Detail";
import { ClientsDetail } from "./pages/Client/Clients/ClientsDetail";
import { Earnings } from "./pages/Client/Earnings";
import { Profile } from "./pages/Client/Profile";
import { Virtual } from "./pages/Client/Virtual";

function App({ children }) {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/sell-with-us" element={<SellWithUs />} />

        <Route path="/account/agency" element={<Agency />} />
        <Route path="/account/agency-detail/:id" element={<AgencyDetail />} />
        <Route path="/account/network" element={<Network />} />
        <Route path="/account/client" element={<Clients />} />
        <Route path="/account/client-detail/:id" element={<ClientsDetail />} />
        <Route path="/account/earnings" element={<Earnings />} />
        <Route path="/account/virtual" element={<Virtual />} />
        <Route path="/account/profile" element={<Profile />} />
      </Routes>
    </main>
  );
}

export default App;
