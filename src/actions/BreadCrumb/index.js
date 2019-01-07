export const SET_BREADCRUMB = 'set_breadcrumb';
export const REMOVE_BREADCRUMB = 'remove_breadcrumb';

export function setBreadCrumb(values) {
    console.log('inside Action Creator setBreadCrumb values:', values);
    // const newValues = values;
    // const formatterNewVal = {
    //     "product_id": newValues.productId,
    //     "product_name": newValues.productName,
    //     "product_description": newValues.productDescription,
    //     "product_photo": newValues.productPhoto,
    //     "product_category": newValues.productCategory,
    //     "product_price": newValues.productPrice
    // }

    return {
        type: SET_BREADCRUMB,
        payload: values
    };
}

export function removeBreadCrumb(values) {
    console.log('inside Action Creator removeBreadCrumb values:', values);

    return {
        type: REMOVE_BREADCRUMB,
        payload: values
    };
}