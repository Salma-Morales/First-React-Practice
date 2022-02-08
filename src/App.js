import logo from './logo.svg';
import './assets/css/app.css';
import ContentWrapper from './components/contentWrapper';
import SideBar from './components/sideBar';

function App() {
  return (
    <div className="App">
    <div id="wrapper">
      <SideBar />
      <ContentWrapper />
    </div>
  </div>
  );
}

export default App;
