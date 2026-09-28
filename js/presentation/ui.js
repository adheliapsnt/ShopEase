import ProductRepository
from "../data/ProductRepository.js";

import CartService
from "../business/CartService.js";

import OrderService
from "../business/OrderService.js";

import OrderRepository
from "../data/OrderRepository.js";

const repository =
    new ProductRepository();

const products =
    repository.getAllProducts();

const productContainer =
    document.getElementById(
        "product-container"
    );

if (productContainer) {

    products.forEach(product => {

        productContainer.innerHTML += `

        <div class="card">

        <img
            src="${product.image}"
            alt="${product.name}"
            class="product-image"
        >

        <p class="category">
            ${product.category}
        </p>

        <h3>${product.name}</h3>

        <p>
            Rp ${product.price}
        </p>

        <button
            class="add-cart-btn"
            data-id="${product.id}">

            Add To Cart

        </button>

    </div>

    `;

        });

}

document.addEventListener(
    "click",
    function(event){

        if(
            event.target.classList.contains(
                "add-cart-btn"
            )
        ){

            const id =
                parseInt(
                    event.target.dataset.id
                );

            const product =
                products.find(
                    p => p.id === id
                );

            CartService.addToCart(
                product
            );

            alert(
                product.name +
                " added to cart!"
            );

        }

    }
);

const cartContainer =
document.getElementById(
    "cart-container"
);

if(cartContainer){

    const cart =
        CartService.getCart();

    let total = 0;

    cart.forEach(item => {

        total += item.price;
        cartContainer.innerHTML += `

        <div class="card product-card">

        <img
            src="${item.image}"
            alt="${item.name}"
            class="cart-image"
        >

        <h3>${item.name}</h3>

        <p>
            Rp ${item.price}
        </p>

        <button
            class="remove-btn"
            data-id="${item.id}">
            Remove
        </button>

    </div>

        `;

    });

    const totalPrice =
    document.getElementById(
        "total-price"
    );

    if(totalPrice){

        totalPrice.innerHTML =
            "Total: Rp " + total;

    }

}

const checkoutBtn =
document.getElementById(
    "checkout-btn"
);

if(checkoutBtn){

    checkoutBtn.addEventListener(
        "click",
        function(){

            const cart =
                CartService.getCart();

            if(cart.length === 0){

                alert(
                    "Cart is empty!"
                );

                return;
            }

            OrderService.checkout(
                cart
            );

            alert(
                "Order Created!"
            );

            window.location.href =
                "orders.html";

        }
    );

}

const ordersContainer =
document.getElementById(
    "orders-container"
);

if(ordersContainer){

    const orders =
        OrderRepository.getOrders();

        orders.forEach(order => {

            let productsHtml = "";
        
            order.items.forEach(item => {
        
                productsHtml += `
        
                <div class="order-item">
        
                    <img
                        src="${item.image}"
                        class="order-image"
                    >
        
                    <span>
                        ${item.name}
                    </span>
        
                </div>
        
                `;
        
            });
        
            ordersContainer.innerHTML += `
        
            <div class="card">
        
                <h3>
                    Order #${order.id}
                </h3>
        
                ${productsHtml}
        
                <p>
                    Status:
                    ${order.status}
                </p>
        
                <p>
                    Total:
                    Rp ${order.total}
                </p>
        
            </div>
        
            `;
        
        });

}

const adminOrders =
document.getElementById(
    "admin-orders"
);

if(adminOrders){

    const orders =
        OrderRepository.getOrders();

    orders.forEach(order => {

        adminOrders.innerHTML += `

        <div class="card">

            <h3>
                Order #${order.id}
            </h3>

            <p>
                Status:
                ${order.status}
            </p>

            <p>
                Total:
                Rp ${order.total}
            </p>

            <button
                class="update-status-btn"
                data-id="${order.id}">

                Update Status

            </button>

        </div>

        `;

    });

}

document.addEventListener(
    "click",
    function(event){

        if(
            event.target.classList.contains(
                "update-status-btn"
            )
        ){

            const orderId =
                parseInt(
                    event.target.dataset.id
                );

            OrderService.updateStatus(
                orderId
            );

            location.reload();

        }

    }
);

document.addEventListener(
    "click",
    function(event){

        if(
            event.target.classList.contains(
                "remove-btn"
            )
        ){

            const id =
                parseInt(
                    event.target.dataset.id
                );

            CartService.removeFromCart(
                id
            );

            location.reload();

        }

    }
);

