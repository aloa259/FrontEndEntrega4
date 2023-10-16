import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Profile from './components/Profile';
import PostsList from './components/PostsList';
import { useEffect, useState } from "react";
import { getAvatar, getPosts, getUser } from './services/posts-services';
import Login from './components/Login';
//import { useUserContext } from './components/context/user-context';

let counter = 0;
const initialState = [];

function App() {
  const [seccion, setSeccion] = useState("posts");
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState(initialState);
  const [avatar, setAvatar] = useState(initialState);
  const [loginOk, setLoginOk] = useState(false);
  const [recibirToken, setRecibirToken] = useState({});

  //const usuario = useUserContext;
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    //verificar login
    //localStorage.removeItem("token");
    if (localStorage) {
      if (localStorage.getItem("token") != undefined && localStorage.getItem("token")) {
        //Si existe el token entonces
        try {
          console.log("se monta el componente use Effect");
          getPosts().then((posts) => setPosts(posts));
          getAvatar().then((avatar) => setAvatar(avatar));
          const requestOp = {
            //method: 'GET',
            headers: { 
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
            //body: JSON.stringify({ username: "john", password: "P4ssW0rd!#" })
          };
          fetch("https://three-points.herokuapp.com/api/users/651c453400afd500148555cd", requestOp)
            .then((resp) => {
              if (resp.status === 200) {
                setLoginOk(true);
                return resp.json();
                console.log("Exito");
              }
            });

          console.log("es la respuesta de token");
          console.log(requestOp);

        } catch (error) {
          console.log("ERROR: " + error.message);
          setError(true);
          console.log(error.message);
        }

      }

    }
  }, []);

  const onProfileClick = () => {
    setSeccion("profile");
  };

  const onLogoClick = () => {
    setSeccion("posts");
  };

  const onSalirClick = () => {
    localStorage.removeItem("token");
    setLoginOk(false);
  };

  const onSearch = (text) => {
    setSearch(text);
    console.log("entra a Search" + search);
  };


  const onLoginComplete = (datos, event) => {
   
    //event.preventDefault();   
    if (datos.email && datos.password) {
      console.log("entro al if" + datos.email);
      const texto = datos.email;
      const index = texto.indexOf("@", 0);
      const usuario = texto.substr(0, index);
      console.log(usuario);

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: usuario, password: datos.password })
      };

      console.log("es la respuesta");
      console.log(requestOptions);

      try {
        fetch("https://three-points.herokuapp.com/api/login", requestOptions)
          .then((resp) => {

            if (resp.status === 200) {
              setLoginOk(true);
              return resp.json();
              console.log("Exito");

            } else {
              console.log("No autorizado");
            }
          })
          .then((data) => localStorage.setItem("token", data.token));

        //localStorage.setItem(usuario, data.token);
        console.log("entra a user");
        console.log(localStorage.getItem("token"));
      } catch (error) {
        console.log("ERROR: " + error.message);
        setError(true);
      }
    } else {
      console.log("No se han capturado los datos de login");
      setError(true);
    }
    console.log(loginOk);
  };

  console.log("Impresión del search " + search);
  const errorr = error;

  console.log(loginOk);
  if (loginOk === false) {
    return (
      <>
       <NavBar onProfileClick={onProfileClick} onLogoClick={onLogoClick} />
        <Login onLoginComplete={onLoginComplete} err={errorr} />
      </>
    );

  } else {
    return (
      <>   
       <NavBar onProfileClick={onProfileClick} onLogoClick={onLogoClick} />    
        <SearchBar search={search} onSearch={onSearch} />


        {
          seccion === "profile"
            ? <Profile avatar={avatar.avatar} username={avatar.name} bio={avatar.bio} onSalirClick={onSalirClick} />
            : null
        }
        {
          posts === initialState
            ? "Loading..."
            : null
        }
        {
          seccion === "posts"
            ? <PostsList posts={posts} search={search} />
            : null
        }
      </>
    );
  }
}

export default App;
