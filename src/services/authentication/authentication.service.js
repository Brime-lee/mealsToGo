import { getApps, initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const loginRequest = (email, password) => {
  const auth = getAuth().signInWithEmailAndPassword(auth, email, password);
};

// const [isAuthenticated, setIsAuthenticated] = useState(false);

// const auth = getAuth();

// useEffect(() => {
//   const auth = getAuth();
//   setTimeout(() => {
//     signInWithEmailAndPassword(auth, 'iambrime@gmail.com', 'test123')
//       .then((user) => {
//         setIsAuthenticated(true);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, 2000);
// }, []);

// if (!isAuthenticated) {
//   return null;
// }
