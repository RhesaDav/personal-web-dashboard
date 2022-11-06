import { LIST_ARTICLE } from "../types/ArticleTypes";

const initialState = [];

const articleReducer = (article = initialState, action) => {
    const {type,payload} = action

    switch(type) {
        case LIST_ARTICLE:
            return payload
        
        default:
            return article;
    }
}

export default articleReducer;