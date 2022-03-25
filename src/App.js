import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import SignupPage from './Components/SignupPage';
import Notification from './Components/Notification';
import PersonalAccount from './Components/PersonalAccount';
import Emailverify from './Components/Emailverify';
import CreatePassword from './Components/CreatePassword';
import Username from './Components/Username';
import ProfilePicture from './Components/ProfilePicture';
import Error from './Components/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/Login' element={<Signup />} />
          <Route path='/SignUp' element={<SignupPage />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Notification' element={<Notification />} />
          <Route path='/PersonalAccount' element={<PersonalAccount />} />
          <Route path='/Emailverify' element={<Emailverify />} />
          <Route path='/CreatePassword' element={<CreatePassword />} />
          <Route path='/Username' element={<Username />} />
          <Route path='/ProfilePicture' element={<ProfilePicture />} />
          <Route path='/Error' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  </>
  )
}

export default App;
