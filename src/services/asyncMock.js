const productos = [
  {
    title: "212 ViP Carolina Herrera 50ml",
    id: 1,
    limit: 100,
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

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const date = new Date().toLocaleDateString;
      resolve(productos, date);
    }, 2000);
  });
}

export function getProductData(idURL) {
  return new Promise((resolve, reject) => {
    const productRequested = productos.find(
      (item) => item.id === Number(idURL)
    );

    setTimeout(() => {
      resolve(productRequested);
    }, 2000);
  });
}

export function getCategoryData(categoryURL) {
  return new Promise((resolve, reject) => {
    const categoryRequested = productos.filter((item) => {
      return item.category.toLowerCase() === categoryURL.toLowerCase();
    });

    setTimeout(() => {
      resolve(categoryRequested);
    }, 2000);
  });
}

export default getData;
