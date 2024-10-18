import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Popular from './components/Popular';
import "./styles/LandingPage.css"
import Trending from './components/Trending'
import LoginUser from'./components/LoginUser'

function App() {
  return (
    <div>

      <div className="myBG">
      <NavigationBar />
      < Intro />
      </div>
      
      <div className="trending">
      <Trending />
      </div>
            
      <div className="indonesia">
      <Popular />
      </div>
      
      <div className="login">
      <LoginUser/>
      </div>
      


    </div>
  );
}

export default App;
