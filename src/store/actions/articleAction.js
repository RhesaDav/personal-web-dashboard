import { articleServices, getListArticle } from "../../services/articleServices"
import { CREATE_ARTICLE, DELETE_ARTICLE, LIST_ARTICLE } from "../types/ArticleTypes"

export const getAllArticle = () => async (dispatch) => {
    try {
        const response = await articleServices.getListArticle()
        dispatch({
            type: LIST_ARTICLE,
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const createArticle = (data) => async (dispatch) => {
    try {
        const response = await articleServices.createArticle(data)
        dispatch({
            type: CREATE_ARTICLE,
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteArticle = (id) => async(dispatch) => {
    try {
        const response = await articleServices.deleteArticle(id)
        dispatch({
            type: DELETE_ARTICLE,
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}