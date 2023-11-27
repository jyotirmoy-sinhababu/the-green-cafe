import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import LandingPage from './pages/landingPage/LandingPage';

function App() {
  return (
    <>
      <div>
        {' '}
        <Nav />
        <Header />
      </div>

      <LandingPage />
    </>
  );
}

export default App;
