import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginUi from './Components/Log/Logy';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer/Footer';
import GlobalStyle from './globalStyles';
import Nav from './Components/Nav/Nav';
import FolderPage from './Components/FolderPage/FolderPage';
import Main from './Components/GeneratorPage/MainView/main';
import Form from './Components/FolderPage/ModalView';




const App: React.FC = () => {
  return (
    <div className="App">


      <BrowserRouter>
        <GlobalStyle />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<LoginUi />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Folder" element={<FolderPage />} />
          <Route path="/Generator" element={<Main />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
        <Footer />  

      </BrowserRouter>
    </div>
  );
}

export default App;
