
import './styles.css';
import { FolderView } from "./FolderView"
import { Folder } from "../../types/types"


const onFolder = (socialite:Folder) => {
        console.log(socialite)
   }


function FolderPage() {
        return (
                <FolderView OnFolder={onFolder}></FolderView>
                )
}
export default FolderPage;
