import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
// Import other pages here as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Default route */}
          <Route index element={<Dashboard />} />
          {/* Add other routes nested under Layout here */}
          {/* Example: <Route path="settings" element={<SettingsPage />} /> */}
        </Route>
        {/* Add routes outside the main Layout here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
