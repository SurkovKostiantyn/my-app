import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import Page from './pages/Page.jsx'
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Layout from "./pages/Layout.jsx"
import NoPage from "./pages/NoPage.jsx"
import 'normalize.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="page" element={<Page />} />
              <Route path="profile" element={<Profile />} />
              <Route path="*" element={<NoPage />} />
          </Route>
      </Routes>
  </BrowserRouter>
)
