import { product } from "./product"
import{Injectable} from '@angular/core'

@Injectable({
    providedIn:'root'
})

export class productservice{

public getproducts(){
    let products:product[];
    products=[
       new product(1,'memory card',500),
       new product(2,'pen drive',750),
       new product(3,'temp glass',100)
    ]
return products;
}
}