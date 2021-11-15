const botonBuscar = document.querySelector("#botonBuscar");

const listarAlbumes = (event) => {

    event.preventDefault();

    let usuario = document.querySelector("#comboUsers").value;
    
    window.localStorage.setItem("usuario", usuario);
   

    let uri = "https://jsonplaceholder.typicode.com/users/" + usuario + "/albums";


    fetch(uri)
        .then(respuesta => respuesta.json())
        .then(data => {

            let contenidoTabla = document.querySelector("#contenidoTabla");
            contenidoTabla.innerHTML = "";

            data.forEach(albumes => {

                contenidoTabla.innerHTML += "<tr><td>"+ albumes.checkbox + "</td>"
                                   + "<td>" + albumes.id + "</td>"
                                   + "<td> " + albumes.userId + "</td>"
                                   + "<td> " + albumes.title + "</td>"
                                   + "</tr>"
            }
            )
        })
        .catch(error => alert("Error con el servidor"));
}
botonBuscar.addEventListener("click", listarAlbumes);



const llenarCombo = (event) => {

    event.preventDefault();

    const uriUsers = "https://jsonplaceholder.typicode.com/users";
    let comboUsers = document.querySelector("#comboUsers");
    comboUsers.value = window.localStorage.getItem("#comboUsers");

    fetch(uriUsers)
        .then(respuesta => respuesta.json())
        .then(data => {

            data.forEach(user => {
                comboUsers.innerHTML += "<option value=" + user.id + ">" + user.name + "</option>";
            });

        })
        .catch(error => alert("Hubo un error al llenar combo"));

}

window.addEventListener("load", llenarCombo)
