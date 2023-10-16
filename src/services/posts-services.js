import data from "../services/posts.json";

export function getPosts() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") }
        //body: JSON.stringify({ username: usuario, password: datos.password })
        
    };
    console.log(requestOptions);

    return fetch("https://three-points.herokuapp.com/api/posts",requestOptions)
        .then(respuesta => respuesta.json())
}

export function getAvatar() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") },
        //body: JSON.stringify({ username: usuario, password: datos.password })
    };
    return fetch("https://three-points.herokuapp.com/api/users/651c453400afd500148555cd",requestOptions)
        .then(respuesta => respuesta.json())
}

export function getUser() {
    const usuario = "john";
    const pass = "P4ssW0rd!#";
    /* return new Promise ( (resolve) =>{
         setTimeout(() => {
             resolve({
                 name:"fdgdfgdfg",
             });
         }, 5000);
 
     });*/

    /*return fetch(
        "https://three-points.herokuapp.com/api/login"
        ).then((resp) => resp.json())
        .then (data => {
            console.log(data);
            const userData ={
                email: data.results[0].email,
                password : data.results[0].password,
            };            
        });*/

    /*const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: usuario, password: pass })
    };

    return fetch("https://three-points.herokuapp.com/api/login", requestOptions)
        .then((response) => {
            
        });    */

}
