import { string } from "yup"
import { SocialiteIconEnums ,ElementIconEnums} from "../enums/enums"


export type Socialite = {
    name : string
    icon : SocialiteIconEnums
} 

 export  type Folder ={
      Title:string 
 }
 export type search= {

    data:string[]
    placeholder:string

 }
 export type Sidebarelement ={
       name:string
       icon:ElementIconEnums 
       data:any []

 }