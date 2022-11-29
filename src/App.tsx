// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Filter from './pages/Filter';
import Result from './pages/Result';

// Main App code goes here
function App() {
  return (
    <div className="App static ">
      {/* page header */}
      <Header />

      {/* main routes. Filter page and Results page */}
      <Routes>
        <Route path="/" element={<Filter />} />
        <Route path={'/filter'} element={<Result />} />
      </Routes>
      {/* page footer */}
      <Footer />
    </div >
  );
}

export default App;
