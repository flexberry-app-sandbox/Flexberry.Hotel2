import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  гражданство: DS.attr('string'),
  датаРожд: DS.attr('date'),
  инГражд: DS.attr('boolean'),
  номерПаспорта: DS.attr('number'),
  серияПаспорта: DS.attr('number'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  гражданство: {
    descriptionKey: 'models.i-i-s-hotel-пасп-данные.validations.гражданство.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаРожд: {
    descriptionKey: 'models.i-i-s-hotel-пасп-данные.validations.датаРожд.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  инГражд: {
    descriptionKey: 'models.i-i-s-hotel-пасп-данные.validations.инГражд.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерПаспорта: {
    descriptionKey: 'models.i-i-s-hotel-пасп-данные.validations.номерПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  серияПаспорта: {
    descriptionKey: 'models.i-i-s-hotel-пасп-данные.validations.серияПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-hotel-пасп-данные.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПаспДанныеE', 'i-i-s-hotel-пасп-данные', {
    фИО: attr('ФИО', { index: 0 }),
    датаРожд: attr('Дата рожд', { index: 1 }),
    серияПаспорта: attr('Серия паспорта', { index: 2 }),
    номерПаспорта: attr('Номер паспорта', { index: 3 }),
    гражданство: attr('Гражданство', { index: 4 }),
    инГражд: attr('Ин гражд', { index: 5 })
  });

  modelClass.defineProjection('ПаспДанныеL', 'i-i-s-hotel-пасп-данные', {
    фИО: attr('ФИО', { index: 0 }),
    датаРожд: attr('Дата рожд', { index: 1 }),
    серияПаспорта: attr('Серия паспорта', { index: 2 }),
    номерПаспорта: attr('Номер паспорта', { index: 3 }),
    гражданство: attr('Гражданство', { index: 4 }),
    инГражд: attr('Ин гражд', { index: 5 })
  });
};
