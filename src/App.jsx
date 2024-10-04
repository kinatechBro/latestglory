import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Auth from "./Auth/Auth";
import SinglePost from "./Pages/SinglePost";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Spinner from "./Components/Spinner";
import { useAuth } from "./contexts/UserProviderContext";
import ProtectRoute from "./Auth/ProtectRoute";
import AdvancedBlogPostEditor from "./Pages/AdvancedBlogPostEditor";
import Post from "./Pages/Post";
import Register from "./Auth/Register";
import Privacy from "./Pages/Privacy";
import CookieConsent from "./Pages/CookieConsent";
import Footer from "./Pages/Footer";
import TermsOfService from "./Pages/TermsOfService";
import Contact from "./Pages/Contact";
export default function App() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/singleposts/:id" element={<SinglePost />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/blog" element={<Post />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="cookies" element={<CookieConsent />} />
        <Route path="terms" element={<TermsOfService />} />
        <Route path="contact" element={<Contact />} />

        {/* Protected Routes */}
        <Route element={<ProtectRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<AdvancedBlogPostEditor />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}
