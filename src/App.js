import './App.css';
import SideBar from './components/SideBar/SideBar';
import Contents from './components/Contents/Contents';

function App() {
  return (
    <div className="App">
      <div className="SideBar">
        <SideBar />
      </div>
      <div className="Contents">
        <Contents />
      </div>
    </div>
  );
}

export default App;
