import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  est: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      "navbar.admin-btn": "Admin vaatesse",
      "navbar.cart-btn": "Ostukorv",
      "product.added": "toode edukalt lisatud",
      "form.name": "Nimi"
    }
  },
  usa: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      "navbar.admin-btn": "To admin view",
      "navbar.cart-btn": "Cart",
      "form.name": "Name"
    }
  },
  rus: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
      "navbar.admin-btn": "Admin vaatesse rus",
      "navbar.cart-btn": "Ostukorv rus"
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: localStorage.getItem("language") || "est", 
   
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;