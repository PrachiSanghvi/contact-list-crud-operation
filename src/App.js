import './styles/app.scss'
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar'
function App() {
  return (
    <div className="contact-list-app">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
