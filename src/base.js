import firebaseConfig from './config';
import firebase from 'firebase'; 





class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.db = firebase.database();
    }

}



export default new Firebase;