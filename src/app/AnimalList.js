import { useState } from "react";
{/*Inicializamos un array para crear un useState de una array y un contador de id para llevar el control de las ids*/}
const array = [];
let idCount = 1;
{/*Hacemos la funcion animal para escribir los datos en la lista de guardados, completamente formateado */}
function Animal({ animal }) {
    return (
        <>
            <li>
                <p>Nombre: {animal.nombre}</p>
                <p>Especie: {animal.especie}</p>
                <p>Edad: {animal.edad}</p>
                <p>Sexo: {animal.sexo}</p>
            </li>
        </>
    );
}
{/*Esta funcion será nuestra funcion principal */}
export default function AnimalList() {
    {/*Iniciamos las variables de estado para llevar el control de los distintos parametros que queremos controlar */}
    const [datos, setDatos] = useState(array);
    const [nombre, setNombre] = useState("");
    const [especie, setEspecie] = useState("");
    const [edad, setEdad] = useState(0);
    const [sexo, setSexo] = useState("");
    {/* Para controlar el select usaremos una constante */}
    const handleSexo = (e) => {
        setSexo(e);
    };
    {/*Con esta funcion agregamos los datos del form al array de datos y ademas los validamos*/}
    function handleAgregar(e) {
        e.preventDefault();
        if (nombre !== "" && especie !== "") {
            setDatos([
                ...datos,
                {
                    id: idCount++,
                    nombre: nombre,
                    especie: especie,
                    edad: edad,
                    sexo: sexo
                }
            ]);
            setNombre("");
            setEspecie("");
            setEdad(0);
            setSexo("");
        }
    }

    return (
        
        <>
        {/*En nuestro return tendremos primero un form para recoger los datos, y luego una lista con los datos que ya hayamos recogido */}
            <form onSubmit={handleAgregar}>
                <label>Nombre: <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} /></label>
                <label>Especie: <input type="text" value={especie} onChange={e => setEspecie(e.target.value)} /></label>
                <label>Edad: <input type="number" value={edad} onChange={e => setEdad(e.target.value)} /></label>
                <label>Sexo: 
                    <select value={sexo} onChange={e => handleSexo(e.target.value)}>
                        <option value="">Selecciona una opción</option>
                        <option value="Macho">Macho</option>
                        <option value="Hembra">Hembra</option>
                    </select>
                </label>
                <input type="submit" value={"Añadir"} />
            </form>
            <h4>Lista de Usuarios</h4>
            <ul>
                {datos.map((data) => 
                    <Animal animal={data} key={data.id} />
                )}
            </ul>
        </>
    );
}