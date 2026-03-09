import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import MechanaAIPage from "./pages/MechanaAIPage.jsx";
import HDProjectPage from "./pages/HDProjectPage.jsx";
import LowesPoPage from "./pages/LowesPoPage.jsx";
import LowesBPage from "./pages/LowesBPage.jsx";
import ZeroWaitPRJPage from "./pages/ZeroWaitPRJPage.jsx";
import WebPortfolioPage from "./pages/WebPortfolioPage.jsx";
import SpendAnalyticsPage from "./pages/SpendAnalyticsPage.jsx";
import CoverBiaPage from "./pages/CoverBiaPage.jsx";
import PPPPage from "./pages/PPPPage.jsx";
import LivongoPage from "./pages/LivongoPage.jsx";
import IntradoPage from "./pages/IntradoPage.jsx";
import LeafletPage from "./pages/LeafletPage.jsx";
import VoipPage from "./pages/VoipPage.jsx";
import QoutelPage from "./pages/QoutelPage.jsx";
import BannerPage from "./pages/BannerPage.jsx";
import PhotographyPage from "./pages/PhotographyPage.jsx";
import "./index.css";

const lenisOptions = {
  duration: 3,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  lerp: 1,
  smoothWheel: true,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ReactLenis root options={lenisOptions}>
              <App />
            </ReactLenis>
          }
        />
        <Route
          path="/projects"
          element={
            <ReactLenis root options={lenisOptions}>
              <ProjectsPage />
            </ReactLenis>
          }
        />
        <Route
          path="/projects/mechana-ai"
          element={
            <ReactLenis root options={lenisOptions}>
              <MechanaAIPage />
            </ReactLenis>
          }
        />
        <Route
          path="/projects/hd"
          element={
            <ReactLenis root options={lenisOptions}>
              <HDProjectPage />
            </ReactLenis>
          }
        />
        <Route
          path="/projects/lowes-po"
          element={
            <ReactLenis root options={lenisOptions}>
              <LowesPoPage />
            </ReactLenis>
          }
        />
        <Route
          path="/projects/lowes-b"
          element={
            <ReactLenis root options={lenisOptions}>
              <LowesBPage />
            </ReactLenis>
          }
        />
        <Route
          path="/projects/zero-wait-prj"
          element={
            <ReactLenis root options={lenisOptions}>
              <ZeroWaitPRJPage />
            </ReactLenis>
          }
        />
        <Route
          path="/projects/web-portfolio"
          element={
            <ReactLenis root options={lenisOptions}>
              <WebPortfolioPage />
            </ReactLenis>
          }
        />
        <Route
          path="/projects/spend-analytics"
          element={
            <ReactLenis root options={lenisOptions}>
              <SpendAnalyticsPage />
            </ReactLenis>
          }
        />
        <Route
          path="/projects/cover-bia"
          element={
            <ReactLenis root options={lenisOptions}>
              <CoverBiaPage />
            </ReactLenis>
          }
        />
        <Route
          path="/projects/ppp"
          element={
            <ReactLenis root options={lenisOptions}>
              <PPPPage />
            </ReactLenis>
          }
        />
        <Route
          path="/projects/livongo"
          element={
            <ReactLenis root options={lenisOptions}>
              <LivongoPage />
            </ReactLenis>
          }
        />
        <Route
          path="/projects/intrado"
          element={
            <ReactLenis root options={lenisOptions}>
              <IntradoPage />
            </ReactLenis>
          }
        />
        <Route
          path="/projects/leaflet"
          element={
            <ReactLenis root options={lenisOptions}>
              <LeafletPage />
            </ReactLenis>
          }
        />
        <Route
          path="/projects/voip"
          element={
            <ReactLenis root options={lenisOptions}>
              <VoipPage />
            </ReactLenis>
          }
        />
        <Route
          path="/projects/qoutel"
          element={
            <ReactLenis root options={lenisOptions}>
              <QoutelPage />
            </ReactLenis>
          }
        />
        <Route
          path="/projects/banner"
          element={
            <ReactLenis root options={lenisOptions}>
              <BannerPage />
            </ReactLenis>
          }
        />
        <Route
          path="/projects/photography"
          element={
            <ReactLenis root options={lenisOptions}>
              <PhotographyPage />
            </ReactLenis>
          }
        />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
