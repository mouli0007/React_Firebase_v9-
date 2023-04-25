
############# Firebase with react #########

/// Installing Firebase
npm i firebase 


//// For Firebase CLI Tools 
npm i -g firebase-tools

############ Authentication with firebase ##################

 Make all of your authentication  imports in your SDK Package !
	 
	// Authentication Service
	
	import { getAuth,GoogleAuthProvider} from "firebase/auth";
		 const auth = getAuth(app );

 
 
#### Syntax		
			 
      ##### Making a simple {email,password } authentication
      
	  const signIn = async () => {
		await createUserWithEmailAndPassword(auth,email,password);
		
		### It will Store the ccredentials in the authentication section
		
	  };


########## Making Googlee Authenticaion ############

  // SignIn with Google !

  const signInwithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err: any) {
      throw new Error(err);
    }
  };
  
  
  ######## Logging out its a common function for all authentication ##############
  
    // Logout Functionality

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err: any) {
      console.log(err);
      throw new Error(err);
    }
  };
