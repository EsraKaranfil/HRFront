import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProfilePanel from './page/Profile/ProfilePanel';
import HomePage from './page/Home/HomePage';
import VardiyaPanel from './page/Vardiya/VardiyaPanel';




function RootNavigation() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/profile-panel' element={<ProfilePanel/>} />     
          <Route path='/vardiya-panel' element={<VardiyaPanel/>} />     


        </Routes>
    </BrowserRouter>
  );
}

export default RootNavigation;