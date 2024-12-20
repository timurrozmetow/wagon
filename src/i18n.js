import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
  en: {
    translation: {
      about: "About",
      capacity: "Capacity",
      wagon: "Wagon",
      certificates: "Certificates",
      contact: "Contact",
      home:"Moving forward with each",
      home1:"new carriage",
      power:"Our Production Capacity",
      power1:"Annual Wagon Repairs",
      power2:"Freight Wagons Produced",
      power3:"Tons of Equipment",
      power4:"Employees",
      aboutSec:"About Us",
      aboutSec1:`The Andijan Mechanical Plant is a leading manufacturer and repair 
      enterprise in Uzbekistan. It specializes in a wide range of 
      railway equipment for a 1520 mm gauge, including freight wagons, 
      tanks, and other specialized wagons for the region and CIS countries.`,
      aboutSec2:`Our plant is equipped with state-of-the-art facilities to ensure 
      top-notch production and repair services, meeting the needs of 
      modern railway systems.`,
      wagon1: "Freight Wagon Model A",
      wagon2: "Tank Wagon Model B",
      wagon3: "Specialized Wagon Model C",
      wagon4: "Freight Wagon Model D",
      wagon5: "Tank Wagon Model E",
      wagon6: "Specialized Wagon Model F",
      wagon7: "Freight Wagon Model G",
      wagon8: "Tank Wagon Model H",
      wagon9: "Specialized Wagon Model I",
      tons:"tons",
      Freight:"Freight",
      Tank:"Tank",
      Specialized:"Specialized",
      wagons:"Railway Wagons",
      wagons1:"Capacity",
      wagons2:"Length",
      wagons3:"Type",
      ton:" tons",
      m:" m",
      cert:"Our Certificates",
      contact:"Contact",
      contact1:`The Andijan Mechanical Plant is a leading manufacturer and repair 
      enterprise in Uzbekistan. It specializes in a wide range of 
      railway equipment for a 1520 mm gauge, including freight wagons, 
      tanks, and other specialized wagons for the region and CIS countries.`,
      contact2:`
      Our plant is equipped with state-of-the-art facilities to ensure 
        top-notch production and repair services, meeting the needs of 
        modern railway systems.`,
    add:"Dubai Silicon Oasis, DDP, A2 Building Dubai",
    res:"2024 Grand Millennium. All Rights Reserved."



    },
  },
  ru: {
    translation: {
      about: "О нас",
      capacity: "Вместимость",
      wagon: "Вагон",
      certificates: "Сертификаты",
      contact: "Контакты",
      home:"Двигаясь вперед с каждым",
      home1:"новыми вагонами",
      power:"Наши производственные мощности",
      power1:"Ежегодный ремонт вагонов",
      power2:"Грузовые вагоны произведены",
      power3:"Тонны оборудования",
      power4:"Сотрудники",
      aboutSec:"О нас",
      aboutSec1:`Андижанский механический завод — ведущее производственное и ремонтное
      предприятие в Узбекистане. Специализируется на выпуске широкого спектра
      железнодорожной техники для колеи 1520 мм, в том числе грузовых вагонов,
      цистерн и других специализированных вагонов для региона и стран СНГ.`,
      aboutSec2:`Наш завод оснащен самым современным оборудованием, обеспечивающим
      первоклассные производственные и ремонтные услуги, отвечающие потребностям
      современных железнодорожных систем.`,
      wagon1: "Грузовой вагон Модель А",
      wagon2: "Вагон-цистерна Модель B",
      wagon3: "Специализированный фургон Модель C",
      wagon4: "Грузовой вагон Модель D",
      wagon5: "Вагон-цистерна Модель E",
      wagon6: "Специализированный вагон модели F",
      wagon7: "Грузовой вагон модели G",
      wagon8: "Вагон-цистерна Модель H",
      wagon9: "Специализированный вагон, модель I",
      tons:"тонн",
      Freight:"Грузовой",
      Tank:"Танкер",
      Specialized:"Специализированный",
      wagons:"Железнодорожные вагоны",
      wagons1:"Вместимость",
      wagons2:"Длина",
      wagons3:"Тип",
      ton:" тонн",
      m:" м",
      cert:"Наши Сертификаты",
      contact:"Контакты",
      contact1:`Андижанский механический завод — ведущее производственное и ремонтное
      предприятие в Узбекистане. Специализируется на выпуске широкого спектра
      железнодорожной техники для колеи 1520 мм, в том числе грузовых вагонов,
      цистерн и других специализированных вагонов для региона и стран СНГ.`,
      contact2:`Наш завод оснащен самым современным оборудованием, обеспечивающим
      первоклассные производственные и ремонтные услуги, отвечающие потребностям
      современных железнодорожных систем.`,
      add:"Dubai Silicon Oasis, DDP, здание A2 в Дубае",
      res:"2024 Grand Millennium. Все права защищены."
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Язык по умолчанию
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
