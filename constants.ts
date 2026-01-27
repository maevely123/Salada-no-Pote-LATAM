import { Recipe, Bonus, FaqItem } from './types';

export const RECIPES: Recipe[] = [
  {
    id: 1,
    title: "ENSALADA REFRESCANTE",
    subtitle: "+ ADEREZO CÍTRICO",
    conservation: "Conservación: 7 días",
    calories: "100 kcal",
    imageUrl: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1769132161/1_svftsf.png"
  },
  {
    id: 2,
    title: "ENSALADA CAPRESE",
    subtitle: "ADEREZO PESTO LIGHT",
    conservation: "Conservación: 7 días",
    calories: "120 kcal",
    imageUrl: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1769132162/2_og0y4l.png"
  },
  {
    id: 3,
    title: "ENSALADA CÉSAR",
    subtitle: "+ ADEREZO ORIGINAL",
    conservation: "Conservación: 7 días",
    calories: "115 kcal",
    imageUrl: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1769132163/3_ct7fx7.png"
  },
  {
    id: 4,
    title: "ENSALADA BIG MAC",
    subtitle: "+ ADEREZO ESPECIAL",
    conservation: "Conservación: 7 días",
    calories: "180 kcal",
    imageUrl: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1769132164/4_srzleu.png"
  },
  {
    id: 5,
    title: "ENSALADA MEDITERRÁNEA",
    subtitle: "+ ADEREZO AGRIDULCE",
    conservation: "Conservación: 7 días",
    calories: "120 kcal",
    imageUrl: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1769132166/5_cualiu.png"
  },
  {
    id: 6,
    title: "ENSALADA TOSCANA",
    subtitle: "+ ADEREZO SICILIANO",
    conservation: "Conservación: 7 días",
    calories: "130 kcal",
    imageUrl: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1769132169/6_wp7upf.png"
  },
  {
    id: 7,
    title: "ENSALADA RÚSTICA",
    subtitle: "+ MOSTAZA Y MIEL",
    conservation: "Conservación: 7 días",
    calories: "160 kcal",
    imageUrl: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1769132170/7_jkgjt2.png"
  }
];

export const BONUSES: Bonus[] = [
  {
    id: 1,
    title: "SMOOTHIES DETOX",
    subtitle: "20 RECETAS",
    count: "BONO 1:",
    price: "$47,90",
    imageUrl: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1769133461/11_b4qj1v.png"
  },
  {
    id: 2,
    title: "SHOTS MATUTINOS",
    subtitle: "5 RECETAS",
    count: "BONO 2:",
    price: "$24",
    imageUrl: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1769133461/12_mqs4g1.png"
  },
  {
    id: 3,
    title: "AGUAS SABORIZADAS",
    subtitle: "15 RECETAS",
    count: "BONO 3:",
    price: "$17,90",
    imageUrl: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1769133480/13_ozfptz.png"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "¿Cómo recibo mis recetas?",
    answer: "Así que se confirme el pago, recibirás un e-mail con acceso inmediato a la plataforma con todas las recetas y bonos."
  },
  {
    question: "¿El curso tiene garantía?",
    answer: "¡Sí! Ofrecemos una garantía incondicional de 7 días. Si no te gusta, te devolvemos tu dinero."
  },
  {
    question: "¿Necesito frascos especiales?",
    answer: "¡No! El método funciona con cualquier frasco de vidrio que tenga buen cierre, incluso envases reutilizados de conserva."
  },
  {
    question: "¿Las recetas incluyen los aderezos?",
    answer: "Sí, todas las ensaladas vienen con recetas exclusivas de aderezos que combinan perfectamente con los ingredientes."
  },
  {
    question: "¿Cuánto tiempo dura la ensalada en frasco en el refrigerador?",
    answer: "Si se monta correctamente siguiendo nuestro método de capas, duran hasta 7 días frescas."
  },
  {
    question: "¿Puedo vender ensaladas en frasco? ¿Cuánto puedo cobrar?",
    answer: "¡Por supuesto! Muchos alumnos usan las recetas para ingresos extra. El precio varía por región, pero enseñamos a poner precio."
  },
  {
    question: "¿Las recetas son fáciles de hacer?",
    answer: "Extremadamente fáciles. Están pensadas para quien no tiene experiencia en la cocina y quiere practicidad."
  },
  {
    question: "¿Los ingredientes son fáciles de encontrar?",
    answer: "Sí, utilizamos ingredientes accesibles que se encuentran en cualquier supermercado o feria."
  },
  {
    question: "¿Necesito tener balanza o utensilios específicos?",
    answer: "No es obligatorio. Usamos medidas caseras (taza, cuchara) para facilitar la preparación."
  }
];