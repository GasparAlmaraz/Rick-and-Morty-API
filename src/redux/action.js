export const ADD_FAV_CHARACTER = "ADD_FAV_CHARACTER"
export const DELETE_CHARACTER = "DELETE_CHARACTER"
export const FILTER = "FILTER"
export const ORDER = "ORDER"

export function addFavCharacter(character){
    return {
        type: ADD_FAV_CHARACTER,
        payload: character
    }
}

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