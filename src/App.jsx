import React from 'react';
import {
  BrowserRouter as Router /* HashRouter */ /* MemoryRouter */,
} from 'react-router-dom';
import { Header } from './components/Header.jsx';

export const App = () => (
  <Router>
    <div
      style={{
        backgroundColor: 'rgba(128, 128, 128, 0.250)',
        minHeight: '90vh',
        borderRadius: '10px',
      }}
    >
      <Header />
    </div>
    <div
      style={{
        backgroundColor: 'grey',
        width: 'auto',
        minHeight: '9vh',
        paddingTop: '1.5%',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a href="https://github.com/HelloBro89/news-site-react-redux-API">
          Link to the app in GitHub
        </a>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        My email: pavelvaloshyn89@gmail.com
      </div>
    </div>
  </Router>
);
