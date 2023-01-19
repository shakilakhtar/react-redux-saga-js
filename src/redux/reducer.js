import {ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART} from "./constants"


export const cartData = (data =[], action) => {

    switch(action.type){

        case ADD_TO_CART:
            return [action.data, ...data]

        case REMOVE_FROM_CART:
            const items = data.filter((item)=> item.id !== action.data)
            return [...items]

        case EMPTY_CART:
            data = []
            return [...data]

        default:
            return data
    }
}