export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imgUrl: string;

    constructor(id:number, name:string, description:string, price:number, imgUrl:string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imgUrl = imgUrl;
    }
}
