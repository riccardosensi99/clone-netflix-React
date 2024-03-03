import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCWPXRzhN9hHr2NbWFWThfnbZ4OKrm7l6s",
  authDomain: "netflix-clone-40767.firebaseapp.com",
  projectId: "netflix-clone-40767",
  storageBucket: "netflix-clone-40767.appspot.com",
  messagingSenderId: "601595982847",
  appId: "1:601595982847:web:cc45851c600fbc05662dca",
  measurementId: "G-XBC140J7TZ",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
