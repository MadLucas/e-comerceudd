import ProductContext from "./ProductContext";
import { useReducer } from 'react';

import axiosClient from '../../config/axiosClient';
import productReducer from "./productReducer";


const ProductProvider = ({ children }) => {

    const initialState = {
        products: [],
        product: [{
            id: "",
            name: "",
            sku: "",
            price: 0,
            image: "",
            stock: ""
        }]
    }

    const [productState, dispatch] = useReducer(productReducer, initialState)

    const getProducts = async () => {
        const response = await axiosClient.get('/products')
        const productos = response.data.info;

        dispatch({
            type: "GET_PRODUCTS",
            payload: productos
        })
    }

    const getProductById = async (id) => {
        try {
            const response = await axiosClient.get(`/products/${id}`);
            const productInfo = response.data.product;

            dispatch({
                type: "GET_PRODUCT",
                payload: productInfo
            })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <ProductContext.Provider value={{
            getProducts,
            getProductById,
            products: productState.products,
            product: productState.product
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider