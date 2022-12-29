import './App.css';
import Home from './components/homePage/home';
import SearchMain from './components/searchPage/searchMain';
import { Routes, Route, Link } from 'react-router-dom';
import NewPage from './components/idPage/newPage';
import FixedPage from './components/fixedPage/fixedPage';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search">
          <Route index element={<SearchMain />} />
          <Route path=":id" element={<NewPage />} />
          {/* <Route path=":id" element={<SearchMain searchType={"Next Page"} />} /> */}
        </Route>
        <Route path='/movies'>
          <Route index />
          <Route path=":id" element={<FixedPage />} />
        </Route>
        <Route path='/tvShows'>
          <Route index />
          <Route path=":id" element={<FixedPage />} />
        </Route>
        <Route path="*" element={<div>Sorry Not Found!</div>} />
      </Routes >
    </div>
  )
}

export default App; 
