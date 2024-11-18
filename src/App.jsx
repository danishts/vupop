import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Overview from './Overview';
import Payouts from './Payouts';
import Settings from './Settings';
import Logout from './Logout';
import Layout from './Layout';
import BroadcasterCharges from './BroadcasterCharges';
import UserManagement from './UserManagement';
import Marketingasset from './Marketingasset';
const App = () => {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <Router>
      <Layout isMobileSidebarOpen={isMobileSidebarOpen} toggleSidebar={toggleSidebar}>
        <Routes>
          <Route path="/overview" element={<Overview />} />
            <Route path="/userManagement" element={< UserManagement/>} />
          <Route path="/payouts" element={<Payouts />} />
          <Route path="/broadcasterCharges" element={<BroadcasterCharges />} />
          <Route path='marketingasset' element={ <Marketingasset/>} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
