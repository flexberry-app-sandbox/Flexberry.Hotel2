import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодДолжност: DS.attr('number'),
  название: DS.attr('string'),
  паспДанные: DS.belongsTo('i-i-s-hotel-пасп-данные', { inverse: null, async: false })
});

export let ValidationRules = {
  кодДолжност: {
    descriptionKey: 'models.i-i-s-hotel-должность.validations.кодДолжност.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-hotel-должность.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  паспДанные: {
    descriptionKey: 'models.i-i-s-hotel-должность.validations.паспДанные.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностьE', 'i-i-s-hotel-должность', {
    кодДолжност: attr('Код должност', { index: 0 }),
    название: attr('Название', { index: 1 }),
    паспДанные: belongsTo('i-i-s-hotel-пасп-данные', 'Пасп данные', {
      фИО: attr('ФИО', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ДолжностьL', 'i-i-s-hotel-должность', {
    кодДолжност: attr('Код должност', { index: 0 }),
    название: attr('Название', { index: 1 }),
    паспДанные: belongsTo('i-i-s-hotel-пасп-данные', 'ФИО', {
      фИО: attr('ФИО', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
