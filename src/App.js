import FirstPage from './components/FirstPage/firstPaje';
import SecondPage from './components/SecondPage/secondPage';
import TirdPage from './components/TirdPage/tirdPage';
import FourPage from './components/FourPage/fourPage';
import SideBar from './components/sideBar';
import AjusteFooter from './components/ajusteFooter';
import Footer from './components/footer';
import Anima from './components/Anima/index';

function App() {
  return (
    <div className="container-fluid App">
      <Anima/>
      <SideBar />
      <FirstPage/>
      <TirdPage/>
      <SecondPage/>
      <FourPage/>
      <Footer/>
      <AjusteFooter />
    </div>
  );
}

export default App;
