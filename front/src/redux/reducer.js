import { ADD_FAV_CHARACTER, DELETE_CHARACTER, FILTER, GET_CHARACTER_DETAIL, GET_FAVORITES, ORDER, CLEAN_DETAIL } from "./action";


const initialState = {
    myFavorites: [],
    characterDetail: {}
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FAV_CHARACTER: {
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            };
        };
        case DELETE_CHARACTER: {
            return {
                ...state,
                myFavorites: state.myFavorites.filter(
                    (char) => char.id !== action.payload
                ),
            };
        }
        case FILTER: {
            const { allCharacters } = state;
            const filteredCharacters = allCharacters.filter(
                (character) => character.gender === action.payload.gender
            );
            return {
                ...state,
                myFavorites: filteredCharacters
            }
        }
        case ORDER: {
            const { allCharacters } = state;
            const sortedCharacters = [...allCharacters].sort((a, b) => {
                if (action.payload === "Ascendente") {
                    return a.id - b.id;
                } else if (action.payload === "Descendente") {
                    return b.id - a.id;
                }
            });
            return {
                ...state,
                myFavorites: sortedCharacters
            }
        }
        case GET_CHARACTER_DETAIL:
            return {
                ...state,
                characterDetail: action.payload
            }
        case GET_FAVORITES:
            return {
                ...state,

            }
        case CLEAN_DETAIL:
            return {
                ...state,
                characterDetail: {},
            };
        default: {
            return state;
        }
    }
}

export default rootReducer;