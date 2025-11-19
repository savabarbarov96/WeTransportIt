import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import StaraZagoraMovingPage from './pages/StaraZagoraMovingPage';
import TransportServicesPage from './pages/TransportServicesPage';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hamalski-uslugi-stara-zagora" element={<StaraZagoraMovingPage />} />
          <Route path="/transportni-uslugi" element={<TransportServicesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
