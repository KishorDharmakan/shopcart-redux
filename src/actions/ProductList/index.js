import ProductListValues from '../../stub/ProductList';

export const FETCH_PRODUCTS = 'fetch_products';
export const CREATE_PRODUCT = 'create_product';
export const FETCH_PRODUCT = 'fetch_product';
export const UPDATE_PRODUCT = 'update_product';

export function fetchProducts() {
    console.log('inside fetchProducts');
    const productsList = ProductListValues.Products
    console.log('productsList:', productsList);
    return {
        type: FETCH_PRODUCTS,
        payload: productsList
    };
}

export function createProduct(values) {
    console.log('inside Action Creator createProduct values:', values);
    const newValues = values;
    const formatterNewVal = {
        "product_id": newValues.productId,
        "product_name": newValues.productName,
        "product_description": newValues.productDescription,
        "product_photo": newValues.productPhoto,
        "product_category": newValues.productCategory,
        "product_price": newValues.productPrice
    }

    return {
        type: CREATE_PRODUCT,
        payload: formatterNewVal
    };
}

export function updateProduct(values) {
    console.log('inside Action Creator updateProduct values:', values);
    const updatedValues = values;
    const formatterUpdateVal = {
        "product_id": updatedValues.productId,
        "product_name": updatedValues.productName,
        "product_description": updatedValues.productDescription,
        "product_photo": updatedValues.productPhoto,
        "product_category": updatedValues.productCategory,
        "product_price": updatedValues.productPrice
    }

    return {
        type: UPDATE_PRODUCT,
        payload: formatterUpdateVal
    };
}

// Fetch Post with id (for PostShow component)
export function fetchProduct(id) {
    const productId = id

    return {
        type: FETCH_PRODUCT,
        payload: productId
    };
}
