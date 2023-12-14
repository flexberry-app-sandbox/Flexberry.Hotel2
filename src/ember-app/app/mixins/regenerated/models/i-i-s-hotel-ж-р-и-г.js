import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерЖурн: DS.attr('number'),
  админ: DS.belongsTo('i-i-s-hotel-админ', { inverse: null, async: false }),
  тЧ2: DS.hasMany('i-i-s-hotel-т-ч2', { inverse: 'жРИГ', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-hotel-ж-р-и-г.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерЖурн: {
    descriptionKey: 'models.i-i-s-hotel-ж-р-и-г.validations.номерЖурн.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  админ: {
    descriptionKey: 'models.i-i-s-hotel-ж-р-и-г.validations.админ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧ2: {
    descriptionKey: 'models.i-i-s-hotel-ж-р-и-г.validations.тЧ2.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЖРИГE', 'i-i-s-hotel-ж-р-и-г', {
    номерЖурн: attr('Номер журн', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    админ: belongsTo('i-i-s-hotel-админ', 'Админ', {

    }, { index: 2 }),
    тЧ2: hasMany('i-i-s-hotel-т-ч2', 'Т ч2', {
      номерКомнаты: attr('Номер комнаты', { index: 0 }),
      прибытие: attr('Прибытие', { index: 1 }),
      убытие: attr('Убытие', { index: 2 }),
      персонал: belongsTo('i-i-s-hotel-персонал', 'Персонал', {

      }, { index: 3 })
    })
  });

  modelClass.defineProjection('ЖРИГL', 'i-i-s-hotel-ж-р-и-г', {
    номерЖурн: attr('Номер журн', { index: 0 }),
    дата: attr('Дата', { index: 1 })
  });
};
