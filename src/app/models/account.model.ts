import { Category } from "./category.model";
import { Obj } from "./obj.model";

export interface Account{
    ads:number
    all:number
    price:number
    remains:number
    obj:Obj
    cats:any
    payment_type:string
    expire_at:Date
}
