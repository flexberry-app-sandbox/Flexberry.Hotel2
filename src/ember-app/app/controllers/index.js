import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.hotel.caption'),
          title: i18n.t('forms.application.sitemap.hotel.title'),
          children: [{
            link: 'i-i-s-hotel-персонал-l',
            caption: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-персонал-l.caption'),
            title: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-персонал-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-hotel-админ-l',
            caption: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-админ-l.caption'),
            title: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-админ-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-hotel-пасп-данные-l',
            caption: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-пасп-данные-l.caption'),
            title: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-пасп-данные-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-hotel-гостиница-l',
            caption: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-гостиница-l.caption'),
            title: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-гостиница-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-hotel-должность-l',
            caption: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-должность-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-hotel-анкета-к-l',
            caption: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-анкета-к-l.caption'),
            title: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-анкета-к-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-hotel-а-о-п-и-l',
            caption: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-а-о-п-и-l.caption'),
            title: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-а-о-п-и-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-hotel-ж-р-и-г-l',
            caption: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-ж-р-и-г-l.caption'),
            title: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-ж-р-и-г-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }
      ]
    };
  }),
})