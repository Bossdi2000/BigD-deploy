//avoid designing, establishing or implementing any features inside the App.jsx file, it should remain as a simple routing/rendering file
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LandingPage from './pages/landing/LandingPage';
import AdminRoutes from './pages/admin/AdminRoutes';
import UserRoutes from './pages/user/UserRoutes';
import SignIntroduction from './pages/other/SignIntroduction';
import AboutPage from './pages/other/AboutPage';
import CoreContributors from './pages/other/CoreContributors';
import ProductEcosystem from './pages/other/ProductEcosystem';
import TeamPage from './pages/other/TeamPage';
import Gallery from './pages/other/Gallery';
import AddProfileForm from './pages/other/AddProfileForm';
import UserGallery from './pages/other/UserGallery';
import Sample from './pages/other/Sample';
import NotFound from './pages/other/NotFound';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Landing page route */}
          <Route path="/" element={<LandingPage />} />
          {/* User routes */}
          <Route path="/user/*" element={<UserRoutes />} />
          {/* Admin routes */}
          <Route path="/admin/*" element={<AdminRoutes />} />
          {/* Route all components that are neither admin or user here as needed */}
          <Route path="/sample" element={<Sample />} />
          <Route path="/sign-introduction" element={<SignIntroduction />} />
          {/* Fallback route for 404 Not Found */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/core-contributors" element={<CoreContributors />} />
          <Route path="/product-ecosystem" element={<ProductEcosystem />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/add-profile" element={<AddProfileForm />} />
          <Route path="/user-gallery" element={<UserGallery />} />
          {/* Add more routes as needed */}
          {/* Fallback route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;