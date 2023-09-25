import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App />

);

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    content: i18n.t('theKey.needed'),
    supportedLngs: ['en', 'ru'],
    fallbacking: "ru",
    detection: {
      order: ['coockie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['coockie']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },

  });