// Catálogo verificado de imágenes en alta resolución para mascotas
export const FOTOS_POR_DEFECTO = {
    "Pata": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80",
    "Rufus": "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=600&q=80",
    "Muffin": "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=600&q=80",
    "Kobu": "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80",
    "Mandala y Nebraska": "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=600&q=80",
    "Pelusa": "https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&w=600&q=80",
    "Pitusa": "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=600&q=80",
    "Ciny": "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?auto=format&fit=crop&w=600&q=80",
    "Sócrates": "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80",
    "Nugget": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80",
    "Fiona": "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80"
};

// Pool diverso de gatos para que NINGUNO se repita
const POOL_GATOS = [
    "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&w=600&q=80"
];

// Pool diverso de perros para que NINGUNO se repita
const POOL_PERROS = [
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80"
];

// Función para calcular un hash numérico consistente a partir de un texto
const hashString = (str = "") => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
};

/**
 * Retorna una imagen única, válida y hermosa para la mascota,
 * reemplazando URLs caídas o temporales de Google.
 */
export const obtenerFotoMascota = (foto, nombre = "", especie = "") => {
    const nombreLimpio = nombre ? nombre.trim() : "";

    // 1. Si el nombre tiene foto específica en el catálogo
    if (nombreLimpio && FOTOS_POR_DEFECTO[nombreLimpio]) {
        if (!foto || foto.includes("encrypted-tbn0.gstatic.com") || foto.includes("undefined") || foto.trim() === "") {
            return FOTOS_POR_DEFECTO[nombreLimpio];
        }
    }

    // 2. Si la foto en base de datos está rota o vacía, seleccionar una del pool dinámico
    if (!foto || foto.includes("encrypted-tbn0.gstatic.com") || foto.includes("undefined") || foto.trim() === "") {
        const hash = hashString(nombreLimpio || "mascota");
        if (especie && especie.toLowerCase() === "perro") {
            return POOL_PERROS[hash % POOL_PERROS.length];
        }
        return POOL_GATOS[hash % POOL_GATOS.length];
    }

    return foto;
};
