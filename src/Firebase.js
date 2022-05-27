import { initializeApp } from 'firebase/app';
import { getStorage, ref, listAll} from "firebase/storage";




const firebaseConfig = {
    apiKey: "AIzaSyAVSV96P3E5T-P2kBrsT6b9xbjhnbb2p_A",
    authDomain: "maotaruo.firebaseapp.com",
    projectId: "maotaruo",
    storageBucket: "maotaruo.appspot.com",
    messagingSenderId: "569772597090",
    appId: "1:569772597090:web:509e72a741ec641018d63b",
    measurementId: "G-3KEDVJYJBJ"
  };


const app = initializeApp(firebaseConfig);

// Get a reference to the storage service
const storage = getStorage(app);

const imagesRef = ref(storage, '/images');

const allImages = []

        listAll(imagesRef)
        .then((res) => {
          res.prefixes.forEach((folderRef) => {
            // All the prefixes under listRef.
            // You may call listAll() recursively on them.
            folderRef.push(allImages)
          });
            
        });






 

export { allImages } 