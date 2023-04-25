######## Fire Store ##############
			
			export const db = getFirestore(app);
			import { db } from "./config/firebase-config";
			import { getDocs,collection} from 'firebase/firestore' 
			      
			
					
					// Getting the Movie List !
					  const movieCollectionRef = collection(db, "movies");
	  
	  ### Getting the movie List
	  
					const data = await getDocs(movieCollectionRef);
					console.log(data);
					
		### Adding the movie List			
		
					import {  addDoc } from "firebase/firestore";

					 await addDoc(movieCollectionRef, {
							title: newMovieTitle,
							releaseDate: newReleaseDate,
							recivedAnOscar: isOscar,
							});
							
		#### Deleting the movie to the list
		
		
					import {deleteDoc,doc} from "firebase/firestore";
		  
				    const movieDoc = doc(db, "movies", moviesId);
					await deleteDoc(movieDoc);
					
					
		#### Updatingt movie to the list ! 


				  import {doc,updateDoc} from "firebase/firestore";
				  
				 const movieDoc = doc(db, "movies", moviesId);
				await updateDoc(movieDoc, { title: updatedTitle });


############ FireStore Rules !################
  
  rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow write,update,delete: if request.auth != null && request.auth.uid == request.resource.data.userId;
      allow read : if true;
    }
  }
}
