import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Layout from "./Components/Layout";

const Home = lazy(() => import("./Pages/HomePage"));
const FeaturesPage = lazy(() => import("./Pages/FeaturePage"));
const BlogPage = lazy(() => import("./Pages/BlogPage"));
const BlogDetailsPage = lazy(() => import("./Pages/BlogDetailsPage"));
const ContactPage = lazy(() => import("./Pages/ContactPage"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
