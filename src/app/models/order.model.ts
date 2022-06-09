import { Address } from "../models/addresss.model";
import { Category } from "./category.model";
import { City } from "./city.model";
import { Product } from "./product.model";
import { User } from "./user.model";

export interface Order {
    id:number,
    f_name:string,
    s_name:string,
    address:Address,
    date:string,
    time:string
    mobile:string,
    total:number,
    delivery_price:number,
    commission:number
    product:Product
    price:number
    quantity:number
    viewers:number
    image:string
    rate:number
    offers:number
    city:City
    seller:User
    comments:number
    category:Category
    status:number
    reward_points:number
    vat_amount:number
    service_amount:number
}
