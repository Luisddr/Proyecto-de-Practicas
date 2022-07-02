// import { createContext, useState, useEffect } from "react";

// import { stateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";


// // create and export Context here current user is saved if exists
// export const UserContext = createContext({
//     setCurrentUser: ()=>null,
//     currentUser: null,
// })


// //userProvider pass to children their useState Methods and values 
// export const UserProvider= ({children})=>{
//     const [currentUser, setCurrentUser] = useState(null);
//     const value = {currentUser, setCurrentUser};

//     //when component mounts  executes listener method and create and set or just set current user state
//     useEffect(()=>{
//         const unsuscribe = stateChangedListener((user)=>{
//             if(user){
//                 createUserDocumentFromAuth(user);
//             }
//             setCurrentUser(user)
//         })

//         return unsuscribe

//     }, [])
//     return <UserContext.Provider value={value}>{children}</UserContext.Provider>
// }