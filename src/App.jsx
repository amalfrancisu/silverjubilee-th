import { Routes, Route, Navigate } from 'react-router-dom';
import CluePage from './pages/CluePage';

function App() {
  return (
    <Routes>
      {/* This is the dynamic route for each clue. 
          It renders the CluePage component for any URL like /clue/jalebi, /clue/ladoo, etc. */}
      <Route path="/clue/:cluePath" element={<CluePage />} />

      {/* This route handles the base URL. 
          It automatically redirects the user to the first clue. */}
      <Route path="/" element={<Navigate to="/clue/jalebi" replace />} />

      {/* A catch-all for any other undefined URL, redirecting to the first clue. */}
      <Route path="*" element={<Navigate to="/clue/jalebi" replace />} />
    </Routes>
  );
}

export default App;
