import { takeLatest, put, all, call } from "redux-saga/effects";

import {
  CHECK_USER_SESSION,
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  SIGN_OUT_START,
} from "../actions/user-actions/actions-types";

import { signInSuccess, signInFailure, signOutSuccess } from "../actions/user-actions";

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  signOutCurrentUser
  
} from "../../utils/firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    console.log(userAuth)
    const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails );
    console.log(userSnapshot)
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export function* signInWithEmail(payload){

  const {email, password} = payload
  
  
  try{
   const {user} = yield call (signInAuthUserWithEmailAndPassword , email, password)
   console.log(user)

   yield call(getSnapshotFromUserAuth, user)

  }
  catch(err){
    yield put(signInFailure(err))
  }
}

export function* userSignOut(){
  try{
    yield call(signOutCurrentUser);
    yield put(signOutSuccess());

  }
  catch(err){
    yield put(signInFailure(err))
  }
}

export function* isUserAuth() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);

}

export function* onEmailSignInStart(){
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuth);
}

export function* onSignOut(){
  yield takeLatest(SIGN_OUT_START, userSignOut)
}

export function* userSagas() {
  yield all([call(onCheckUserSession), call(onGoogleSignInStart), call(onEmailSignInStart), call(onSignOut)]);
}
