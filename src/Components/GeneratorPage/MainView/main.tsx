import {SidebarView} from '../SideBar/SidebarView';
import Configuration from '../Configuration/ButtonConfig/ButtonConfig';
import WrapperView from '../Wrapper/Wrapperview';
import NavBar from '../NavBar/Navbar';





function Main() {
  return (
   
          <div className="main">
            
    <SidebarView/>
    <WrapperView/>
    <Configuration/>
  
       
    </div>
       
  )
}

export default Main;