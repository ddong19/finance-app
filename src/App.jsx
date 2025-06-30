import './css/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import NavBar from './components/NavBar'

function App() {

  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/categories" element={<Categories/>} />
        </Routes>
      </main>
    </div>

  );
}

export default App
