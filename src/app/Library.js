import { useState } from "react";

{/*Nos creamos un const en el que guardar el array de libros  */}
const librosArray = [
    "Harry Potter",
    "Como aprobar React by José Navarro",
    "El señor de los Anillos",
    "Las cronicas de Narnia"
];

{/*Esta será nuestra función principal, en la que renderizaremos los titulos 
    de los libros que hemos creado anteriormente  */}
export default function Library() {
    const [libros, setLibros] = useState(librosArray);
    const [nuevoTitulo, setNuevoTitulo] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    {/** Creamos una función para manejar el edit del título del libro */}
    function handleEdit(index) {
        setEditIndex(index);
        setNuevoTitulo(libros[index]);
    }
    {/*Agregamos el titulo cuando se pulsa enter */}
    function handleKeyPress(e, index) {
        if (e.key === "Enter") {
            const updatedLibros = [...libros];
            updatedLibros[index] = nuevoTitulo;
            setLibros(updatedLibros);
            setEditIndex(null);
            setNuevoTitulo("")
        }
    }

    return (
        <div>
            {/*Mapeamos cada libro que se nos pase del array, añadimos un boton editar, este pasará el index al estado de editar y cuando
            pulsemos enter el editIndex pasara a null y el cambio se guardará, por lo que volveremos al estado principal, con el cambio hecho*/}
            {libros.map((libro, index) => (
                <div key={index}>
                    {editIndex === index ? (
                        <input value={nuevoTitulo} onChange={(e) => setNuevoTitulo(e.target.value)} onKeyDown={(e) => handleKeyPress(e, index)}/>
                    ) : (
                        <h3>{libro}</h3>
                    )}
                    <button onClick={() => handleEdit(index)}>Editar</button>
                </div>
            ))}
        </div>
    );
}