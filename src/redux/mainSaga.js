import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth676Saga from '../features/EmailAuth676/redux/sagas';
import EmailAuth673Saga from '../features/EmailAuth673/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth676Saga,
EmailAuth673Saga,
EmailAuthSaga,
    
  ]);
}