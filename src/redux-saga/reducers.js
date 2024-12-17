const initialState= {
    refreshToken: "",
    JWTToken:"",
    first_name:""
}

export const reducer1 = (state = initialState, action) => {
    switch (action.type) {
        case "TOKEN_STATUS_Reducer":
            return {
                ...state,
                refreshToken: action.payload,
            }
        case "JWT_STATUS_Reducer":
            return {
                ...state,
                JWTToken: action.payload,
            }
        case "FIRST_NAME_Reducer":
            return {
                ...state,
                first_name: action.payload,
            }
        default:
            return state;
    }

}