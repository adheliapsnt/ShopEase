class Product {

    constructor(
        id,
        name,
        price,
        category,
        image
    ) {

        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.image = image;

    }
}

class FashionProduct extends Product {

    constructor(
        id,
        name,
        price,
        image
    ) {

        super(
            id,
            name,
            price,
            "Fashion",
            image
        );

    }
}

class ElectronicsProduct extends Product {

    constructor(
        id,
        name,
        price,
        image
    ) {

        super(
            id,
            name,
            price,
            "Electronics",
            image
        );

    }
}

class BeautyProduct extends Product {

    constructor(
        id,
        name,
        price,
        image
    ) {

        super(
            id,
            name,
            price,
            "Beauty",
            image
        );

    }
}

export {
    Product,
    FashionProduct,
    ElectronicsProduct,
    BeautyProduct
};