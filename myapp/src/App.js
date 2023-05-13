// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/home/Home';
import Contact from './Contact';
import About from './About';
import Navbar from './components/navbar/Navbar';
import Blog from './components/details/Blog';
import Create from './components/home/Create';
import Edit from './components/details/Edit';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>    
          <Route path="/" element={<Navbar/>}>

                <Route path="/create" element={<Create/>}/>
                <Route index element={<Home/>} />
                <Route path="/About" element={<About/>} />
                <Route path="/Contact" element={<Contact/>} /> 
                <Route path="/blog/:id" element={<Blog/>} />
                <Route path="/edit/:id" element={<Edit/>} />
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
