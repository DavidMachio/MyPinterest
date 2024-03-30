import { fotosProfile } from "../../data/fotosprofile";
import  {profile}  from "../Header/Header";
import "./Profile.css";

const sectionProfile = document.createElement("section");
sectionProfile.classList = 'sectionProfile'
export let fotoPerfil = "/profile.png";
let nombre = "Nombre";
let nombreUsuario = "Nombre de usuario";
let imgProfile;
let firstName;
let userName;




const printFormulario = () => {
  const formulario = document.createElement("div");
  const profileImagenes = document.createElement("div");
  for (const photo of fotosProfile) {
    const optionProfile = document.createElement("img");
    optionProfile.src = photo.img;
    optionProfile.classList.add("optionProfile");
    profileImagenes.append(optionProfile);

    optionProfile.addEventListener("click", () => {
      console.log(photo.img);
      const allOptions = document.querySelectorAll(".optionProfile");
      allOptions.forEach((option) => {
        option.classList.remove("selected");
      });
      optionProfile.classList.add("selected");
      fotoPerfil = photo.img;
      imgProfile.src = fotoPerfil;
       // Actualiza la imagen de perfil del header
      profile.src = fotoPerfil;
    });
  }
  const inputNombre = document.createElement("input");
  const inputUserName = document.createElement("input");
  const aceptar = document.createElement("button");

  formulario.classList = "formulario";
  profileImagenes.classList = "profileImagenes";
  inputNombre.classList = "inputNombre";
  inputUserName.classList = "inputUserName";
  aceptar.classList = "aceptar";

  inputNombre.placeholder = "Nombre";
  inputUserName.placeholder = "Nombre de usuario";
  aceptar.textContent = "Aceptar";

  formulario.append(profileImagenes);
  formulario.append(inputNombre);
  formulario.append(inputUserName);
  formulario.append(aceptar);
  sectionProfile.append(formulario);

  inputNombre.addEventListener("input", (ev) => {
    nombre = ev.target.value;

    firstName.textContent = nombre;
  });

  inputUserName.addEventListener("input", (ev) => {
    nombreUsuario = ev.target.value;
    userName.textContent = "@_" + nombreUsuario;
  });

  aceptar.addEventListener("click", () => {
    if(inputNombre.value){
        nombre = inputNombre.value;
    nombreUsuario = inputUserName.value;

    // Llama a la función para guardar en localStorage
    saveProfileToLocalStorage();
    formulario.classList = "oculto";
    }else{
        saveProfileToLocalStorage();
        formulario.classList = "oculto";
    }
  });
};

export const printProfile = () => {
  app.innerHTML = "";
  sectionProfile.innerHTML = "";

  imgProfile = document.createElement("img");
  firstName = document.createElement("h2");
  userName = document.createElement("h3");
  const profileEdit = document.createElement("button");

  imgProfile.classList = "imgProfile";
  firstName.classList = "firstName";
  userName.classList = "userName";

  sectionProfile.classList = "sectionProfile";
  imgProfile.classList = "imgProfile";
    firstName.textContent = nombre; // Asignamos el valor de nombre a firstName
  
    userName.textContent = nombreUsuario;
  
    imgProfile.src = fotoPerfil;
  

  profileEdit.textContent = "Editar perfil";
  profileEdit.classList = "profileEdit";

  sectionProfile.append(imgProfile);
  sectionProfile.append(firstName);
  sectionProfile.append(userName);
  sectionProfile.append(profileEdit);
  app.append(sectionProfile);

  profileEdit.addEventListener("click", () => printFormulario());
};
export const saveProfileToLocalStorage = () => {
  // Crea un objeto con los valores que deseas almacenar
  const profileData = {
    fotoPerfil: fotoPerfil,
    nombre: nombre,
    nombreUsuario: nombreUsuario,
    
    // Agrega más propiedades si es necesario
  };

  // Convierte el objeto a una cadena JSON
  const profileJSON = JSON.stringify(profileData);

  // Almacena la cadena JSON en el localStorage
  localStorage.setItem("profileData", profileJSON);
};

export const loadProfileFromLocalStorage = (profile) => {
  // Obtener el perfil almacenado en el localStorage
  const profileJSON = localStorage.getItem("profileData");

  // Verificar si hay datos almacenados
  if (profileJSON) {
    // Convertir la cadena JSON a un objeto JavaScript
    const profileData = JSON.parse(profileJSON);

    // Asignar los valores del perfil
    profile = profileData.fotoPerfil;
    fotoPerfil = profileData.fotoPerfil;
    nombre = profileData.nombre;
    nombreUsuario = profileData.nombreUsuario;
  }
  
};

// Llama a la función para cargar los datos del perfil al cargar la aplicación
loadProfileFromLocalStorage();

