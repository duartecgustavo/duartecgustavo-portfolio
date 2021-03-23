import FirstPage from './components/FirstPage/firstPaje';
import SecondPage from './components/SecondPage/secondPage';
import TirdPage from './components/TirdPage/tirdPage';
import FourPage from './components/FourPage/fourPage';
import SideBar from './components/sideBar';
import Footer from './components/footer';
import Anima from './components/Anima/index';

function App() {
  return (
    <div className="container-fluid">
      <Anima/>
      <SideBar />
      <FirstPage/>
      <TirdPage/>
      <SecondPage/>
      <FourPage/>
      <Footer/>
    </div>
  );
}

export default App;
