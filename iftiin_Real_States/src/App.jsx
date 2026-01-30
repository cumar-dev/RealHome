import React from "react";
import Header from "./Component/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Component/Footer";
import { Toaster } from "react-hot-toast";
import About from "./Pages/About";
import Buy from "./Pages/Buy";
import Rent from "./Pages/Rent";
import Sell from "./Pages/Sell";
import Contact from "./Pages/Contact";
import SignIn from "./Pages/SignIn";
import GetStarted from "./Pages/GetStarted";
import DashboardLayout from "./Component/DashboardLayout";
import Dashboard from "./Pages/Dashboard";
import { AuthProvider } from "./Context/AuthContext";
import UnAuthanticatedRout from "./Component/UnAuthanticatedRout";
import ProtectedRout from "./Component/ProtectedRout";
import BuyerInformation from "./Pages/BuyerInformation";
import RentInformation from "./Pages/RentInformation";

const App = () => {
  return (
    // this will be App Provider
    <AuthProvider>
      <div>
        <>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRout>
                    <DashboardLayout />
                  </ProtectedRout>
                }
              >
                <Route index element={<Dashboard />} />
                <Route path="buy" element={<Buy />} />
                <Route path="buy/:id" element={<BuyerInformation />} />
                <Route path="rent" element={<Rent />} />
                <Route path="rent/:id" element={<RentInformation />} />
                <Route path="sell" element={<Sell />} />
              </Route>
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/signIn"
                element={
                  <UnAuthanticatedRout>
                    <SignIn />
                  </UnAuthanticatedRout>
                }
              />
              <Route
                path="/getStarted"
                element={
                  <UnAuthanticatedRout>
                    <GetStarted />
                  </UnAuthanticatedRout>
                }
              />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </>
      </div>
    </AuthProvider>
  );
};

export default App;
