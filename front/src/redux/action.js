export const ADD_FAV_CHARACTER = "ADD_FAV_CHARACTER"
export const DELETE_CHARACTER = "DELETE_CHARACTER"
export const FILTER = "FILTER"
export const ORDER = "ORDER"
export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL";
export const GET_FAVORITES = "GET_FAVORITES";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
import axios from "axios";

export function deleteCharacter(id){
    return{
        type: DELETE_CHARACTER,
        payload: id
    }
}

export function filterCards(gender){
    return{
        type: FILTER,
        payload: gender
    }
}

export function orderCards(id){
    return{
        type: ORDER,
        payload: id
    }
}

export const getFavorites = () => {
    return async function (dispatch) {
        const URL_BASE = "http://localhost:3001";
        const response =  await axios.get(`${URL_BASE}/rickandmorty/fav`);
        dispatch({type: GET_FAVORITES, payload: response.data})
    }
}

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL };
  };