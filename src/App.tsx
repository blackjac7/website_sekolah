import React, { Suspense, useEffect } from "react";
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
const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
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

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <LoadingSpinner>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login/:role" element={<Login />} />
                <Route path="/profile/*" element={<Profile />} />
                <Route path="/facilities" element={<Facilities />} />
                <Route path="/extracurricular" element={<Extracurricular />} />
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
              </Routes>
            </Suspense>
          </LoadingSpinner>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
