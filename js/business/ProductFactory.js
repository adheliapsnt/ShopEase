import {
    FashionProduct,
    ElectronicsProduct,
    BeautyProduct
}
from "./Product.js";

class ProductFactory {

    static createProduct(
        type,
        id,
        name,
        price,
        image
    ) {

        switch(type){

            case "Fashion":
                return new FashionProduct(
                    id,
                    name,
                    price,
                    image
                );

            case "Electronics":
                return new ElectronicsProduct(
                    id,
                    name,
                    price,
                    image
                );

            case "Beauty":
                return new BeautyProduct(
                    id,
                    name,
                    price,
                    image
                );

            default:
                throw new Error(
                    "Invalid Product Type"
                );
        }
    }
}

export default ProductFactory;