import './App.css';
import AppHeader from './components/AppHeader'
import HeaderTopics from './components/HeaderTopics';
import SideNav from './components/SideNav'
//import Main from './components/Main'


function App() {
  return (
    <div className="App container-fluid">
      <AppHeader />
      <HeaderTopics />
      <SideNav />
    </div>
  );
}

export default App;
