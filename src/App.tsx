import React, { Suspense, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import LoadingSpinner from "./components/shared/LoadingSpinner";

// Lazy load pages
const Home = React.lazy(() =>
  import("./pages/Home").then((module) => ({ default: module.default }))
);
const Login = React.lazy(() =>
  import("./pages/Login").then((module) => ({ default: module.default }))
);
const Profile = React.lazy(() => import("./pages/Profile"));
const Facilities = React.lazy(() => import("./pages/Facilities"));
const Extracurricular = React.lazy(() => import("./pages/Extracurricular"));
const News = React.lazy(() => import("./pages/News"));
const Contact = React.lazy(() => import("./pages/Contact"));
const AnnouncementDetail = React.lazy(
  () => import("./pages/AnnouncementDetail")
);
const NewsDetail = React.lazy(() => import("./pages/News/NewsDetail"));
const AcademicCalendar = React.lazy(() => import("./pages/AcademicCalendar"));
const Maintenance = React.lazy(() => import("./pages/Maintenance"));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const isMaintenance = import.meta.env.VITE_MAINTENANCE === "true";

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {!isMaintenance && <Navbar />}
        <main className="flex-grow pt-16">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {isMaintenance ? (
                <Route path="*" element={<Maintenance />} />
              ) : (
                <>
                  <Route path="/" element={<Home />} />
                  <Route path="/login/:role" element={<Login />} />
                  <Route path="/profile/*" element={<Profile />} />
                  <Route path="/facilities" element={<Facilities />} />
                  <Route
                    path="/extracurricular"
                    element={<Extracurricular />}
                  />
                  <Route path="/news" element={<News />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route
                    path="/announcement/:id"
                    element={<AnnouncementDetail />}
                  />
                  <Route path="/news/:id" element={<NewsDetail />} />
                  <Route
                    path="/academic-calendar"
                    element={<AcademicCalendar />}
                  />
                </>
              )}
            </Routes>
          </Suspense>
        </main>
        {!isMaintenance && <Footer />}
      </div>
      <Analytics />
      <SpeedInsights />
    </Router>
  );
}

export default App;
