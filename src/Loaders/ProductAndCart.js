import { getStoredCart } from "../utilities/fakedb";

export const ProductAndCart = async() => {
    //get product data
    const productData = await fetch ('products.json');
    const products = await productData.json();
//get cart
    const savedCart = getStoredCart();
    const intialCart = [];
    for (const id in savedCart){
        const addedProduct = products.find (product => product.id === id);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            intialCart.push(addedProduct);
        }
    }
    return {products: products, intialCart: intialCart};
}