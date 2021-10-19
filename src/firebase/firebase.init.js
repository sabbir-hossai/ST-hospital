import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthontication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthontication;