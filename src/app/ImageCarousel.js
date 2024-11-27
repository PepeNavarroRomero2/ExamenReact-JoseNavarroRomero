import { useState } from "react";

{/* Nos creamos una constante para pasar el array con las url de imagenes y sus titulos  */}
const images = [
    { url: "https://tvazteca.brightspotcdn.com/dims4/default/77f8b13/2147483647/strip/true/crop/1280x720+0+0/resize/928x522!/format/webp/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2Fa2%2Fdc%2F771b85c24a10a67fa83759614162%2Fdiseno-tv-azteca-6.png", titulo: "Chill 1" },
    { url: "https://st.depositphotos.com/5311026/57460/i/450/depositphotos_574606878-stock-photo-young-guy-jacket-bow-tie.jpg", titulo: "Imagen Random 1" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHsgDqQidntc0-ua5gGAxirQg7wbgPd1tu7Q&s", titulo: "Imagen Random 2" },
    { url: "https://www.dzoom.org.es/wp-content/uploads/2019/09/imagenes-stock-4.jpg", titulo: "Imagen Random 3" },
    { url: "https://marketing4ecommerce.net/wp-content/uploads/2024/11/Portada-articulo-750x450px-1-1.jpg", titulo: "Chill 2" }
];

{/*Esta será nuestra función principal  */}
export default function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    {/*Función para avanzar a la siguiente imagen, si llegamos al final, volvemos al inicio */}
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // 
    };
    {/*Función para retroceder a la imagen anterior, si estamos al inicio, volvemos al final*/}
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // 
    };
    return (
        <div>
            {/* Mostrar la imagen actual */}
            <img src={images[currentIndex].url} alt={images[currentIndex].titulo} style={{ width: '150px', height: 'auto' }} />
            <h5>{images[currentIndex].titulo}</h5>
            <div>
                {/* Botón para retroceder */}
                <button onClick={prevImage}>Anterior</button>
                {/* Botón para avanzar */}
                <button onClick={nextImage}>Siguiente</button>
            </div>
        </div>
    );
}