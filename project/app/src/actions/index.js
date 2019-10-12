// import { todosRef } from "../config/firebase";
// import { FETCH_TODOS } from "./types";

// export const addToDo = newToDo => async dispatch => {
//   todosRef.push().set(newToDo);
// };

// export const completeToDo = completeToDoId => async dispatch => {
//   todosRef.child(completeToDoId).remove();
// };

// export const fetchToDos = () => async dispatch => {
//   todosRef.on("value", snapshot => {
//     dispatch({
//       type: FETCH_TODOS,
//       payload: snapshot.val()
//     });
//   });
// };

import todosRef from "../config/firebase";
import * as firebase from "firebase/app";

export const fetchData = () => async dispatch => {
    var db;
    var docRef = todosRef.collection("project").doc("Sjn7qg87JLVq7ZwG5mZb");
    // odosRef.get("1")t

    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

}

export const sendLogs = (plan, history) => async dispatch => {
    todosRef.collection("Log").add(plan).then(res => {
        console.log(res.id);
        history.push("/userLogs");
    }).catch(err => {
        console.log(err);
    })
}

export const getLogs = (user) => async dispatch => {
    console.log(user);
    var array = [];
    todosRef.collection("Log").where("Enrollment", "==", user).get().then(res => {
        res.forEach(log => {
            array.push(log.data());
        })
        console.log(array);
        dispatch({
            type: "FETCH_LOG",
            payload: array
        })
    })
} 

export const getAllLogs = () => async dispatch => {
    var array = [];
    todosRef.collection("Log").get().then(res => {
        res.forEach(log => {
            array.push(log.data());
        })
        console.log(array);
        dispatch({
            type: "FETCH_ALLLOG",
            payload: array
        })
    })
} 

export const setUser = () => async dispatch => {
    try{
        const id = localStorage.getItem("userId");
        if(id == null){
            
        }
        else{
            todosRef.collection("Users").where("uid", "==", id).get().then(res => {
                res.forEach(user => {
                    dispatch({
                        type: "FETCH_USER",
                        payload: user.data()
                    });
                })
            })
        }
    }
    catch(err){
        localStorage.removeItem("userId");
    }
};

export const loginStudent = (user, history) => async dispatch => {
    console.log(typeof(user.email));
    console.log(user);
    // firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(res=>{
    //     console.log(res);
    // }).catch(err => {
    //     console.log(err);
    // })
    firebase.auth().signInWithEmailAndPassword(user.email,user.password).then(function(res){
        if(res){
            localStorage.setItem("userId", res.user.uid);
            todosRef.collection("Users").where("uid", "==", res.user.uid).get().then(res => {
                res.forEach(user => {
                    
                    dispatch({
                        type: "FETCH_USER",
                        payload: user.data()
                    });
                    // console.log(user._document.proto.fields);
                    history.push("/dashboard");
                })
            })
        }
        // $scope.busy = false;
    }).catch(function(err){
        
            console.log(err);

    })
    


}


// Warden
export const loginWarden = (warden, history) => async dispatch => {
    const user = {
        email: "warden@iiita.ac.in"
    }
    firebase.auth().signInWithEmailAndPassword(warden.email,warden.password).then(function(res){
        if(res){
            localStorage.setItem("userId", res.user.uid);
            dispatch({
                type: "FETCH_WARDEN",
                payload: user
            })
             history.push("/dashboardWarden");
        }
        // $scope.busy = false;
    }).catch(function(err){
        
            console.log(err);

    })
}

export const getDisApprove = () => async dispatch => {
    var array = [];
    todosRef.collection("Log").where("StatusByParent", "==", "Pending").get().then(res => {
        res.forEach(log => {
            array.push(log.data());
        })
        console.log(array);
        dispatch({
            type: "FETCH_DISAPPROVE",
            payload: array
        })
    })
}