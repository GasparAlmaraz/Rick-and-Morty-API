import { ADD_FAV_CHARACTER, DELETE_CHARACTER } from "./action";


const initialState = {
    myFavorites: [],
};

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case ADD_FAV_CHARACTER: {
            return { ...state, myFavorites: [...state.myFavorites, action.payload] };
        };
        case DELETE_CHARACTER:
        return {
            ...state,
            myFavorites: state.myFavorites.filter(
            (char) => char.id !== action.payload
            ),
        };
        default: {
            return state;
        }
    }
}