import ProductFactory
from "../business/ProductFactory.js";

class ProductRepository {

    getAllProducts(){

        return [

            ProductFactory.createProduct(
                "Fashion",
                1,
                "Oversized T-Shirt",
                120000,
                "assets/Oversized T-shirt.webp"
            ),

            ProductFactory.createProduct(
                "Electronics",
                2,
                "Gaming Mouse",
                350000,
                "assets/Mouse Gaming.jpg"
            ),

            ProductFactory.createProduct(
                "Beauty",
                3,
                "Face Wash",
                75000,
                "assets/Face Wash.jpg"
            ),

            ProductFactory.createProduct(
                "Fashion",
                4,
                "Hoodie",
                250000,
                "assets/hoodie.jpg"
            ),

            ProductFactory.createProduct(
                "Electronics",
                5,
                "Mechanical Keyboard",
                850000,
                "assets/keyboard.jpg"
            )

        ];
    }
}

export default ProductRepository;