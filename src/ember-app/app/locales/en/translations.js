import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISHotelАОПИLForm from './forms/i-i-s-hotel-а-о-п-и-l';
import IISHotelАдминLForm from './forms/i-i-s-hotel-админ-l';
import IISHotelАнкетаКLForm from './forms/i-i-s-hotel-анкета-к-l';
import IISHotelГостиницаLForm from './forms/i-i-s-hotel-гостиница-l';
import IISHotelДолжностьLForm from './forms/i-i-s-hotel-должность-l';
import IISHotelЖРИГLForm from './forms/i-i-s-hotel-ж-р-и-г-l';
import IISHotelПаспДанныеLForm from './forms/i-i-s-hotel-пасп-данные-l';
import IISHotelПерсоналLForm from './forms/i-i-s-hotel-персонал-l';
import IISHotelАОПИEForm from './forms/i-i-s-hotel-а-о-п-и-e';
import IISHotelАдминEForm from './forms/i-i-s-hotel-админ-e';
import IISHotelАнкетаКEForm from './forms/i-i-s-hotel-анкета-к-e';
import IISHotelГостиницаEForm from './forms/i-i-s-hotel-гостиница-e';
import IISHotelДолжностьEForm from './forms/i-i-s-hotel-должность-e';
import IISHotelЖРИГEForm from './forms/i-i-s-hotel-ж-р-и-г-e';
import IISHotelПаспДанныеEForm from './forms/i-i-s-hotel-пасп-данные-e';
import IISHotelПерсоналEForm from './forms/i-i-s-hotel-персонал-e';
import IISHotelАОПИModel from './models/i-i-s-hotel-а-о-п-и';
import IISHotelАдминModel from './models/i-i-s-hotel-админ';
import IISHotelАнкетаКModel from './models/i-i-s-hotel-анкета-к';
import IISHotelГостиницаModel from './models/i-i-s-hotel-гостиница';
import IISHotelДолжностьModel from './models/i-i-s-hotel-должность';
import IISHotelЖРИГModel from './models/i-i-s-hotel-ж-р-и-г';
import IISHotelПаспДанныеModel from './models/i-i-s-hotel-пасп-данные';
import IISHotelПерсоналModel from './models/i-i-s-hotel-персонал';
import IISHotelТЧ1Model from './models/i-i-s-hotel-т-ч1';
import IISHotelТЧ2Model from './models/i-i-s-hotel-т-ч2';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-hotel-а-о-п-и': IISHotelАОПИModel,
    'i-i-s-hotel-админ': IISHotelАдминModel,
    'i-i-s-hotel-анкета-к': IISHotelАнкетаКModel,
    'i-i-s-hotel-гостиница': IISHotelГостиницаModel,
    'i-i-s-hotel-должность': IISHotelДолжностьModel,
    'i-i-s-hotel-ж-р-и-г': IISHotelЖРИГModel,
    'i-i-s-hotel-пасп-данные': IISHotelПаспДанныеModel,
    'i-i-s-hotel-персонал': IISHotelПерсоналModel,
    'i-i-s-hotel-т-ч1': IISHotelТЧ1Model,
    'i-i-s-hotel-т-ч2': IISHotelТЧ2Model
  },

  'application-name': 'Hotel',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Hotel',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Hotel',
          title: 'Hotel'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        hotel: {
          caption: 'Hotel',
          title: 'Hotel',
          'i-i-s-hotel-персонал-l': {
            caption: 'Персонал',
            title: ''
          },
          'i-i-s-hotel-админ-l': {
            caption: 'Админ',
            title: ''
          },
          'i-i-s-hotel-пасп-данные-l': {
            caption: 'Пасп данные',
            title: ''
          },
          'i-i-s-hotel-гостиница-l': {
            caption: 'Гостиница',
            title: ''
          },
          'i-i-s-hotel-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-hotel-анкета-к-l': {
            caption: 'Анкета К',
            title: ''
          },
          'i-i-s-hotel-а-о-п-и-l': {
            caption: 'АОПИ',
            title: ''
          },
          'i-i-s-hotel-ж-р-и-г-l': {
            caption: 'ЖРИГ',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-hotel-а-о-п-и-l': IISHotelАОПИLForm,
    'i-i-s-hotel-админ-l': IISHotelАдминLForm,
    'i-i-s-hotel-анкета-к-l': IISHotelАнкетаКLForm,
    'i-i-s-hotel-гостиница-l': IISHotelГостиницаLForm,
    'i-i-s-hotel-должность-l': IISHotelДолжностьLForm,
    'i-i-s-hotel-ж-р-и-г-l': IISHotelЖРИГLForm,
    'i-i-s-hotel-пасп-данные-l': IISHotelПаспДанныеLForm,
    'i-i-s-hotel-персонал-l': IISHotelПерсоналLForm,
    'i-i-s-hotel-а-о-п-и-e': IISHotelАОПИEForm,
    'i-i-s-hotel-админ-e': IISHotelАдминEForm,
    'i-i-s-hotel-анкета-к-e': IISHotelАнкетаКEForm,
    'i-i-s-hotel-гостиница-e': IISHotelГостиницаEForm,
    'i-i-s-hotel-должность-e': IISHotelДолжностьEForm,
    'i-i-s-hotel-ж-р-и-г-e': IISHotelЖРИГEForm,
    'i-i-s-hotel-пасп-данные-e': IISHotelПаспДанныеEForm,
    'i-i-s-hotel-персонал-e': IISHotelПерсоналEForm
  },

});

export default translations;
