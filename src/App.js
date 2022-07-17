import logo from './logo.svg';
import './App.css';
import LogoImg from "./resources/loginImg.png";
import SignIn from "./SignIn/SignIn";
import MainApp from './MainApp/MainApp';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

function viewScreen(screen)
{
  if(screen === 1)
    return(
      <SignIn/>
    )

  else if(screen === 2)
    return(<MainApp />)
}

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* {viewScreen(2)}; */}
      <Routes>
        <Route exact path="/" element={<SignIn />}/>
        <Route exact path="/profile" element={<MainApp screen="1"/>}/>
        <Route exact path="/profile/edit" element={<MainApp screen="2"/>}/>
        <Route exact path="/allTickets" element={<MainApp screen="3"/>}/>
        <Route exact path="/allTickets/ticket/:id" element={<MainApp screen="4"/>}/>
        <Route exact path="/allSellers" element={<MainApp screen="5"/>}/>
        <Route exact path="/allSellers/:id" element={<MainApp screen="6"/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
