// Firebase
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  where,
  query,
  addDoc,
  setDoc,
  writeBatch,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsri1qoWJNX9PcBaYhFhB5reZP9eFQsKo",
  authDomain: "reactjs-ecommerce-atenea.firebaseapp.com",
  projectId: "reactjs-ecommerce-atenea",
  storageBucket: "reactjs-ecommerce-atenea.appspot.com",
  messagingSenderId: "1062790385904",
  appId: "1:1062790385904:web:9f712c3cb305eb17427235",
};

const appFirebase = initializeApp(firebaseConfig);

const db = getFirestore(appFirebase);

//Implementar async function getData()

async function getData() {
  const productosRef = collection(db, "productos");
  const documentsSnapshot = await getDocs(productosRef);
  const documents = documentsSnapshot.docs;
  const docsData = documents.map(
    (item) => {
      return { ...item.data(), id: item.id };
    }
  );
  return docsData;
}

//Implementar getProductData
async function getProductData(id) {
  const docRef = doc(db, "productos", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } else {
    throw new Error("No encontramos ese producto.");
  }
}

//Implementar getCategoryData
async function getCategoryData() {
  const productosRef = collection(db, "productos");
  // cambiamos esto
  const q = query(productosRef, where("price", ">=", 200));
  const documentsSnapshot = await getDocs(q);

  const documents = documentsSnapshot.docs;

  return documents.map((item) => ({ ...item.data(), id: item.id }));
}

async function createOrder(orderData) {
  const collectionRef = collection(db, "orders");
  const docCreated = await addDoc(collectionRef, orderData);

  return docCreated.id;
}

async function getOrder(id) {
  const docRef = doc(db, "orders", id);
  const docSnapshot = await getDoc(docRef);

  return { ...docSnapshot.data(), id: docSnapshot.id };
}

async function _exportProducts() {
  const productos = [
    {
      title: "212 ViP Carolina Herrera 50ml",
      id: 1,
      stock: 100,
      description:
        "Carolina Herrera 212 VIP Women es una fragancia dulce y elegante, inspirada en la vida nocturna de Nueva York y diseñada para la mujer segura de sí misma y VIP. Con notas que incluyen el ron, almizcle y la vainilla.",
      img: "https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/c385976bc54d78dff661f3a8d562b253/5/0/50180_12.jpg",
      price: 1500,
      category: "perfumes",
    },
    {
      title: "Paco Rabanne In-Victus 200ml",
      id: 2,
      stock: 100,
      description:
        "El Eau de Toilette Invictus, un trofeo para nuestro héroe. Diseño de cristal macizo con un tapón de metal brillante y victorioso. Diseño: Cédric Ragot. Rasgos dominantes: atlético, de una robustez pura. Representa la fuerza y la audacia.",
      img: "https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/c385976bc54d78dff661f3a8d562b253/7/8/782797_001.jpg",
      price: 7395,
      category: "perfumes",
    },
    {
      title: "Gres Gabotine 100ml",
      id: 3,
      stock: 100,
      description:
        "Cabotine de Gres es una fragancia icónica y vibrante. Notas frescas y florales se entrelazan en una sinfonía olfativa única. Sumérgete en un mundo de sofisticación y feminidad con su estela cautivadora y duradera.",
      img: "https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/c385976bc54d78dff661f3a8d562b253/7/6/76704_10.jpg",
      price: 2490,
      category: "perfumes",
    },
    {
      title: "Femme Hugo Boss 75ml",
      id: 4,
      stock: 100,
      description:
        "Hugo Boss Femme es una fragancia floral frutal con notas de salida de durazno, fresiay grosella negra, notas de corazón de azucena, jazmín y rosa de Bulgaria, y notas de fondo de chabacano, ámbar y limonero. Una fragancia delicada y radiante.",
      img: "https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/c385976bc54d78dff661f3a8d562b253/4/9/49807_2.jpg",
      price: 5370,
      category: "perfumes",
    },
    {
      title: "Acqua di Giogia 100ml",
      id: 5,
      limit: 100,
      description:
        "El perfume Armani Acqua Di Gioia es una fragancia fresca y floral inspirada en la naturaleza, el mar y la libertad. La fragancia evoca una sensación de armonía y frescura gracias a sus notas acuáticas y florales, como el jazmín, el limón y la menta. Es una fragancia moderna y elegante que refleja la esencia de la mujer libre y apasionada.",
      img: "https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/c385976bc54d78dff661f3a8d562b253/4/9/49592_10.jpg",
      price: 6935,
      category: "perfumes",
    },
    {
      title: "United Dreams Together 80ml",
      id: 6,
      stock: 100,
      description:
        "United Dreams Together complementa la línea de perfumes United Dreams con un llamado a creer en el sueño universal que nos une a todos.",
      img: "https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/22be083fa690981d1c9a5b2393e28a77/3/2/325368.jpg",
      price: 1575,
      category: "perfumes",
    },
    {
      title: "Lady Million Empire 50ml",
      id: 7,
      stock: 100,
      description:
        "¿Cómo hacer para sobresalir? El aroma femenino y delicioso del perfume Lady Million Empire es tu mejor aliado para ello. Con notas sabrosas de naranja, magnolia, coñac, neroli y osomanto. ¡Perfecto para impactar!",
      img: "https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/c385976bc54d78dff661f3a8d562b253/3/7/375923_10_1.jpg",
      price: 4476,
      category: "perfumes",
    },
    {
      title: "Antonio Banderas Her Golden Secret 50ml",
      id: 8,
      stock: 100,
      description:
        "Her Golden Secret es una fragancia floral y oriental con notas de bergamota, mandarina, gardenia, vainilla y musgo de roble. Elegante y sofisticada, perfecta para ocasiones formales e informales.",
      img: "https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/c385976bc54d78dff661f3a8d562b253/6/6/66880_2_1.jpg",
      price: 1276,
      category: "perfumes",
    },
  ];

  for (let item of productos) {
    const collectionRef = collection(db, "productos");
    const docCreated = await addDoc(collectionRef, item);
    console.log("Doc created with id:", docCreated.id);
  }
}

async function _exportProductsWithBatch() {
  const productos = [
    {
      title: "212 ViP Carolina Herrera 50ml",
      id: 1,
      stock: 100,
      description:
        "Carolina Herrera 212 VIP Women es una fragancia dulce y elegante, inspirada en la vida nocturna de Nueva York y diseñada para la mujer segura de sí misma y VIP. Con notas que incluyen el ron, almizcle y la vainilla.",
      img: "https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/c385976bc54d78dff661f3a8d562b253/5/0/50180_12.jpg",
      price: 1500,
      category: "perfumes",
    },
    {
      title: "Paco Rabanne In-Victus 200ml",
      id: 2,
      stock: 100,
      description:
        "El Eau de Toilette Invictus, un trofeo para nuestro héroe. Diseño de cristal macizo con un tapón de metal brillante y victorioso. Diseño: Cédric Ragot. Rasgos dominantes: atlético, de una robustez pura. Representa la fuerza y la audacia.",
      img: "https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/c385976bc54d78dff661f3a8d562b253/7/8/782797_001.jpg",
      price: 7395,
      category: "perfumes",
    },
    {
      title: "Gres Gabotine 100ml",
      id: 3,
      stock: 100,
      description:
        "Cabotine de Gres es una fragancia icónica y vibrante. Notas frescas y florales se entrelazan en una sinfonía olfativa única. Sumérgete en un mundo de sofisticación y feminidad con su estela cautivadora y duradera.",
      img: "https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/c385976bc54d78dff661f3a8d562b253/7/6/76704_10.jpg",
      price: 2490,
      category: "perfumes",
    },
    {
      title: "Femme Hugo Boss 75ml",
      id: 4,
      stock: 100,
      description:
        "Hugo Boss Femme es una fragancia floral frutal con notas de salida de durazno, fresiay grosella negra, notas de corazón de azucena, jazmín y rosa de Bulgaria, y notas de fondo de chabacano, ámbar y limonero. Una fragancia delicada y radiante.",
      img: "https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/c385976bc54d78dff661f3a8d562b253/4/9/49807_2.jpg",
      price: 5370,
      category: "perfumes",
    },
    {
      title: "Acqua di Giogia 100ml",
      id: 5,
      limit: 100,
      description:
        "El perfume Armani Acqua Di Gioia es una fragancia fresca y floral inspirada en la naturaleza, el mar y la libertad. La fragancia evoca una sensación de armonía y frescura gracias a sus notas acuáticas y florales, como el jazmín, el limón y la menta. Es una fragancia moderna y elegante que refleja la esencia de la mujer libre y apasionada.",
      img: "https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/c385976bc54d78dff661f3a8d562b253/4/9/49592_10.jpg",
      price: 6935,
      category: "perfumes",
    },
    {
      title: "United Dreams Together 80ml",
      id: 6,
      stock: 100,
      description:
        "United Dreams Together complementa la línea de perfumes United Dreams con un llamado a creer en el sueño universal que nos une a todos.",
      img: "https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/22be083fa690981d1c9a5b2393e28a77/3/2/325368.jpg",
      price: 1575,
      category: "perfumes",
    },
    {
      title: "Lady Million Empire 50ml",
      id: 7,
      stock: 100,
      description:
        "¿Cómo hacer para sobresalir? El aroma femenino y delicioso del perfume Lady Million Empire es tu mejor aliado para ello. Con notas sabrosas de naranja, magnolia, coñac, neroli y osomanto. ¡Perfecto para impactar!",
      img: "https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/c385976bc54d78dff661f3a8d562b253/3/7/375923_10_1.jpg",
      price: 4476,
      category: "perfumes",
    },
    {
      title: "Antonio Banderas Her Golden Secret 50ml",
      id: 8,
      stock: 100,
      description:
        "Her Golden Secret es una fragancia floral y oriental con notas de bergamota, mandarina, gardenia, vainilla y musgo de roble. Elegante y sofisticada, perfecta para ocasiones formales e informales.",
      img: "https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/c385976bc54d78dff661f3a8d562b253/6/6/66880_2_1.jpg",
      price: 1276,
      category: "perfumes",
    },
  ];

  const batch = writeBatch(db);

  productos.forEach((producto) => {
    const newId = producto.id;
    delete producto.id;
    const newDoc = doc(db, "productos", `1${newId}`);
    batch.set(newDoc, producto);
  });

  const data = await batch.commit();
  console.log("Listo!", data);
}

export {
  getData,
  getOrder,
  getProductData,
  getCategoryData,
  createOrder,
  _exportProducts,
  _exportProductsWithBatch,
};
