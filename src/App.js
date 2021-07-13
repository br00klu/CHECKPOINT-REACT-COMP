import './App.css';
import Profilephoto from './Component/Profile/ProfilePhoto';
import Fullname from './Component/Profile/FullName';
import Addrs from './Component/Profile/Address';

function App() {
  return (
    <div className="App">
      <Profilephoto/>
      <Fullname/>
      <Addrs/>
    </div>
  );
}

export default App;
