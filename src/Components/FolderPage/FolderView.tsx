import { Folder } from "../../types/types"
import { SearchBar } from "../Searchbar/SearchBar";
import "./styles.css";
import {AiFillFolderAdd} from 'react-icons/ai'
import Form from "./ModalView";
import {useState} from 'react';
import Modal from "./ModalView" ;



type FolderViewProps = {
   Folders?: Folder[]
   OnFolder?: any
   onSearch?: any
}

export const FolderView = (props: FolderViewProps) => {
   const [modalOpen, setModalOpen] = useState(false);


   const { Folders, OnFolder, onSearch } = props
   return (
      <div  className="main-container">
               <div className="header">
                  <div className="titre1">
                  <h1 className="titre-header">All  Project</h1>
                  </div>
                  <div className="bt1">
                  <button className="btn-containerr"    onClick={() => {
           setModalOpen(true);
         }} >  <AiFillFolderAdd size="2em" color="#6b6b6b"/> Create project </button>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
                  </div>
              
                   <SearchBar  OnSearch={onSearch} />
                
             </div>
         <div className="row">
            <ul>  {
               Folders?.map((folder: Folder) => {

                  return (

                     <li className="column">
                        <div className="card">
                           <div className="card-img">
                              <img src="" />


                           </div>
                           <div className="card-title">

                              <h3> {folder.Title}</h3>

                           </div>
                           <div className="btn">
                              <button key={folder.Title}><a href="login" onClick={() => OnFolder(Folders)}> veiw more </a></button>

                           </div>
                        </div>
                     </li>


                  )
               })

            }
            </ul>
         </div>



         
      </div>)
}
FolderView.defaultProps = {

   Folders: [
      { Title: 'E-Commerce' },
      { Title: 'E-Commerce' },
      { Title: 'E-Learning' },
      { Title: 'GamingHouse' },
      { Title: 'hani barkallah' },
      { Title: 'GamingHouse' },
      { Title: 'hani barkallah' },
      { Title: 'GamingHouse' },
      { Title: 'hani barkallah' },
      { Title: 'hani barkallah' },
      { Title: 'hani barkallah' },
      { Title: 'hani barkallah' },
   ]
}






