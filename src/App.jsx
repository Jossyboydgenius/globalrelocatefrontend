import { Route, Routes } from "react-router-dom";
import Landing from "./pages/unauthenticated/Landing";
import Login from "./pages/unauthenticated/Login";
import Signup from "./pages/unauthenticated/Signup";
import "./App.css";
import ForgotPassword from "./pages/unauthenticated/ForgotPassword";
import VerifyEmail from "./pages/unauthenticated/VerifyEmail";

// Dashboard route imports
import Countries from "./pages/user/Countries";
import AiAssistant from "./pages/user/AiAssistant";
import CompareCountries from "./pages/user/CompareCountries";
import TaxCalculator from "./pages/user/TaxCalculator";
import Favourites from "./pages/user/Favourites";
import Community from "./pages/user/Community";
import Notifications from "./pages/user/Notifications";
import CountryDetails from "./pages/user/CountryDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/verifymail" element={<VerifyEmail />} />

      {/* Dashboard routes  */}
      <Route path="/user/countries" element={<Countries />} />
      <Route path="/user/countries/:countryName" element={<CountryDetails />} />
      <Route path="/user/ai-assistant" element={<AiAssistant />} />
      <Route path="/user/compare" element={<CompareCountries />} />
      <Route path="/user/tax-calculator" element={<TaxCalculator />} />
      <Route path="/user/notifications" element={<Notifications />} />
      <Route path="/user/favourites" element={<Favourites />} />
      <Route path="/user/community" element={<Community />} />
    </Routes>
  );
}

export default App;
