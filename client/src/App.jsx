import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import About from './Pages/About'
import Projects from './Pages/Projects';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
export default function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>

      </Routes>
    </BrowserRouter>
    </div>
  );

  // return(
  //   <div>
  //     Hello world
  //   </div>
  // );
}
