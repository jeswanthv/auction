import request from 'graphql-request';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditAuction from './pages/EditAuction';
import Home from './pages/Home';

function App() {
  const [teams, setTeams] = useState(null);

  useEffect(() => {
    const fetchteams = async () => {
      const { teams } = await request(
        'https://api-ap-south-1.graphcms.com/v2/cl0dmxg5o0u9g01xsht880hhv/master',
        `
      { 
        teams {
          id
          teamName
          teamBudget
          teamPhoto{
            id
            url
          }
        }
      }
    `
      );

      setTeams(teams);
    };

    fetchteams();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home teams={teams} />} />
        <Route path='/edit-auction' element={<EditAuction teams={teams} />} />
      </Routes>
    </Router>
  );
}

export default App;
