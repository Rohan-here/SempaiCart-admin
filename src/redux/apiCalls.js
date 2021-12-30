import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requests";
import { addProductFailure, addProductStart, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux";


export const login = async(dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (e) {
        dispatch(loginFailure());
    }
}

export const getProducts = async(dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get("/products");
        dispatch(getProductSuccess(res.data));
    } catch (e) {
        dispatch(getProductFailure());
    }
}

export const updateProduct = async(id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
        // update
        dispatch(updateProductSuccess({ id, product }));
    } catch (err) {
        dispatch(updateProductFailure());
    }
};

export const addProducts = async(product, dispatch) => {
    dispatch(addProductStart());
    try {
        const res = await publicRequest.post("/products", { product });
        dispatch(addProductStart(res.data));
    } catch (e) {
        dispatch(addProductFailure());
    }
}

export const deleteProducts = async(id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id));
    } catch (e) {
        dispatch(deleteProductFailure());
    }
}