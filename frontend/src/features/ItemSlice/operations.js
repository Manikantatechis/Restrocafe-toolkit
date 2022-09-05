import API from "../../API"
import {fetchItemAction} from "./ItemSlice";

const api = new API();

export const fetchItems = (category) => {
    return async (dispatch) => {
        return api.getItems(category)
            .then((items) => {
                dispatch(fetchItemAction(items))
            }).catch((error) => {
                alert("Failed to connect API: /items/")
            })
    }
}

