import {getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification,updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Pages/Login/Firebase/Firebase.init';


initializeAuthentication();

const useFirebase = () => {
    const [name,setName] = useState({});
    const [user,setUser] = useState({});
    const [error,setError] = useState('');

    const [email,setEmail] = useState({});
    const [password,setPassword] = useState({});
    const [isLogin,setIsLogin] = useState(false);
    const [isLoading,setIsLoading] = useState(true)

    const handleName = e =>{
        setName(e.target.value);
    }

    const handleEmail = e =>{
        setEmail(e.target.value);
    }
    const handlePassword = e =>{
        setPassword(e.target.value);
    }

    const setUserName = () =>{
        updateProfile(auth.currentUser, {displayName : name})
        .then(result =>{
            setUser(result)
        })
    }


    const toggleLogin = (e) =>{
        setIsLogin(e.target.checked);
    }

    const handleSignUp = (e) =>{
        e.preventDefault();
        if(password.length < 6){
            setError(' Password should be at least 6 characters')
            return;
        }

        if (isLogin) {
            processLogin(email, password);
          }
          else {
            createNewUser(email, password);
          }
        
    }

    const emailVerify = ()=>{
        sendEmailVerification(auth.currentUser)
        .then(result =>{
            setUser(result?.user);
        })
    }

    const auth = getAuth();

    const signInUsingGoogle = () =>{
        setIsLoading(true)
    const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
        .then(result => {
        setUser(result.user);

        })
        .finally(()=> setIsLoading(false))   
    }
    useEffect(()=>{
         onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });

    } ,[auth]);

    const logOut =() =>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{})
        .finally(()=> setIsLoading(false))
    }


const processLogin = (email, password) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(()=> setIsLoading(false)) 
  }

const createNewUser = (email,password) =>{
    setIsLoading(true)
    createUserWithEmailAndPassword(auth,email,password)
    .then(result =>{
        setUser(result.user);
        setError('');
        setUserName();
        emailVerify();

    })
    .finally(()=> setIsLoading(false))

    .catch(error=>{
        setError(error.message)
    })
}


    return {
        isLogin,
        toggleLogin,
        user,
        error,
        signInUsingGoogle,
        logOut,
        handleSignUp,
        handleEmail,handlePassword,
        createNewUser,
        handleName,
        isLoading
    }
        

};

export default useFirebase;