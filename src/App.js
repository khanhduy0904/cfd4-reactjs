import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home"
import Detail from './pages/Detail';
import Register from './pages/Register';
import CFDTeam from './pages/CFDTeam';
import Collab from './pages/Collab';
import Payment from './pages/Payment';
import RegisterSuccess from './pages/RegisterSuccess';
import Project from './pages/Project';
import ProFile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
      {/* <Detail /> */}
      {/* <CFDTeam /> */}
      {/* <Collab /> */}
      {/* <Payment /> */}
      {/* <Register /> */}
      {/* <RegisterSuccess /> */}
      {/* <Project /> */}
      {/* <ProFile /> */}
    </div>
  );
}

export default App;
