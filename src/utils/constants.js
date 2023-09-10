import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
  { id: 4, text: "blog", url: "/blog" },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "I believe that a healthy lifestyle is within reach for everyone. We invite you to join our community and embark on a transformative journey towards a happier, fitter, and more vibrant you. Together, let's embrace the power of nutrition and exercise to unlock your full potential and live your best life.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "I understand that change can be challenging, which is why we offer a wide range of products, carefully selected to align with our values with a pinch of humor. But it doesn't end there, check out my blog page for comprehensive resources and articles! ",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Driven by my own personal journey, i dedicate myself to researching the latest scientific findings in the field. Adopting a healthy lifestyle goes beyond just diet and exercise—it encompasses a holistic approach to well-being, encompassing physical, mental, and emotional aspects.",
  },
];

// export const products_url = 'https://course-api.com/react-store-products'
export const products_url = "/.netlify/functions/products";

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
export const single_product_url = "/.netlify/functions/single-product?id=";
