

 import{City} from './city.model'
 import{User} from './user.model'
 import{Category} from './category.model'
import { Store } from './store.model'
 export interface  Product  {
     id:number
     name:string
     price:number
     image:string
     quantity:number
     city:City
     seller:User
     calls:number
     chats:number
     viewers:number
     offers:number
     created_at:Date
     online_for:number
     expire_in:number
     favourite:boolean
     category:Category
     comments:number
     is_complete:boolean
     rate:number
     store:Store

 }
 