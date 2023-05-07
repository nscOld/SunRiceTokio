import { useState, useEffect } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCqAtw6aUDdWBRO_MU3jpcWat_CjNWa4ks",
  authDomain: "animanga-356c4.firebaseapp.com",
  projectId: "animanga-356c4",
  storageBucket: "animanga-356c4.appspot.com",
  messagingSenderId: "584194587076",
  appId: "1:584194587076:web:590162da1ee68719b38c91",
  measurementId: "G-MW2CDGH6DB"
};


/*Цей код перевіряє, чи Firebase вже ініціалізовано і
 якщо ні, то він ініціалізує його за допомогою firebase.initializeApp(firebaseConfig).
 Якщо Firebase вже ініціалізовано, то викликається метод firebase.app() без параметрів.*/
 
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);        
} else {
  firebase.app();
}

// Оголошення типу користувача, який містить displayName та photoURL
interface User {
  displayName: string | null;
  photoURL: string | null;
}

// Компонент для входу за допомогою Google
const GoogleAuth = (): JSX.Element => {
  // Стан для збереження повідомлення про помилку входу
  const [logi, setLogi] = useState<string>("");
  // Стан для збереження користувача
  const [user, setUser] = useState<User | null>(null);

  // Ефект, який виконується при монтуванні компонента
  useEffect(() => {
    // Підписка на зміни автентифікації користувача
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // Якщо користувач автентифікований, зберігаємо його дані
        setUser(user);
      } else {
        // Інакше ставимо стан користувача на null
        setUser(null);
      }
    });
  }, []);

  // Обробник натискання кнопки входу за допомогою Google
  const handleGoogleSignIn = () => {
    // Створюємо нового провайдера Google
    const provider = new firebase.auth.GoogleAuthProvider();
    // Відправляємо запит на автентифікацію з Google за допомогою перенаправлення
    firebase.auth()
      .signInWithRedirect(provider)
      .then(() => {
        // Після автентифікації отримуємо результат перенаправлення
        return firebase.auth().getRedirectResult();
      })
      .catch((logi) => {
        // Якщо сталася помилка, зберігаємо повідомлення про неї
        setLogi(logi.message);
      });
  };

  // Обробник натискання кнопки виходу
  const handleSignOut = () => {
    // Відправляємо запит на вихід з облікового запису
    firebase.auth()
      .signOut()
      .then(() => {
        // Якщо вихід відбувся успішно, ставимо стан користувача на null
        setUser(null);
      })
      .catch((logi) => {
        setLogi(logi.message);
      });
  };

  return (
    <div className="navbar-links box-btn-photoUser">
      {user && (
        <div className="container-userPhoto">
          <img src={user.photoURL ?? ""} alt="User Avatar" className="user-photo" />
          <p className="username">{user.displayName ?? ""}</p>
        </div>
      )}
      {!user ? (
        <button onClick={handleGoogleSignIn} className="btn-logIn">Log-in</button>
      ) : (
        <button onClick={handleSignOut} className="btn-signOut">Sign-out</button>
      )}
      {logi && <p>{logi}</p>}
    </div>
  );
};

export default GoogleAuth;
