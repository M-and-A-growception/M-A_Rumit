import { TOKEN_STATUS_ACTION,JWT_STATUS_ACTION, FIRST_NAME_ACTION } from "./action_creator";


export const TOKEN_STATUS = (token) => {
    return {
        type: TOKEN_STATUS_ACTION,
        payload:token,
    };

}
export const  JWT_STATUS = (jwt) => {
    return {
        type: JWT_STATUS_ACTION,
        payload: jwt
    }
};
export const  FIRST_NAME = (name) => {
    return {
        type: FIRST_NAME_ACTION,
        payload: name
    }
}