import { call, put, takeEvery, takeLatest } from "redux-saga/effects";



function* TOKEN_STATUS_Saga_Func(action) {
    yield put({
        type: 'TOKEN_STATUS_Reducer',
        payload: action.payload
    });
}
function* JWT_STATUS_Saga_Func(action) {
    yield put({
        type: 'JWT_STATUS_Reducer',
        payload: action.payload
    });
}
function* FIRST_NAME_Saga_Func(action) {
    yield put({
        type: 'FIRST_NAME_Reducer',
        payload: action.payload
    });
}

function* mysaga() //make sure you use the * because it is a generator function we use the yield function. this generator function is a asyncronous function
{
    yield takeEvery('TOKEN_STATUS_ACTION', TOKEN_STATUS_Saga_Func);//if we use the TakeEvery then it take evrey thing under the mysaga function and when we using the takelatest then it should take only the latest of the mysaga function. 
    yield takeEvery('JWT_STATUS_ACTION', JWT_STATUS_Saga_Func);//if we use the TakeEvery then it take evrey thing under the mysaga function and when we using the takelatest then it should take only the latest of the mysaga function. 
    yield takeEvery('FIRST_NAME_ACTION', FIRST_NAME_Saga_Func);//if we use the TakeEvery then it take evrey thing under the mysaga function and when we using the takelatest then it should take only the latest of the mysaga function. 

}

export default mysaga;