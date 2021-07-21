import AppAlbum from './AppAlbum';
import AppProfile from './AppProfile';
import AppOrder from './AppOrder';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppAlbum />
        <AppProfile />
        <AppOrder />
      </header>
    </div>
  );
}

export default App;
