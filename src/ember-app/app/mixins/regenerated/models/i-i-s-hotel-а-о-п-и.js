import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерКомнаты: DS.attr('number'),
  админ: DS.belongsTo('i-i-s-hotel-админ', { inverse: null, async: false }),
  персонал: DS.belongsTo('i-i-s-hotel-персонал', { inverse: null, async: false }),
  тЧ1: DS.hasMany('i-i-s-hotel-т-ч1', { inverse: 'аОПИ', async: false })
});

export let ValidationRules = {
  номерКомнаты: {
    descriptionKey: 'models.i-i-s-hotel-а-о-п-и.validations.номерКомнаты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  админ: {
    descriptionKey: 'models.i-i-s-hotel-а-о-п-и.validations.админ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  персонал: {
    descriptionKey: 'models.i-i-s-hotel-а-о-п-и.validations.персонал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧ1: {
    descriptionKey: 'models.i-i-s-hotel-а-о-п-и.validations.тЧ1.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АОПИE', 'i-i-s-hotel-а-о-п-и', {
    номерКомнаты: attr('Номер комнаты', { index: 0 }),
    персонал: belongsTo('i-i-s-hotel-персонал', 'Персонал', {

    }, { index: 1 }),
    админ: belongsTo('i-i-s-hotel-админ', 'Админ', {

    }, { index: 2 }),
    тЧ1: hasMany('i-i-s-hotel-т-ч1', 'Т ч1', {
      имущество: attr('Имущество', { index: 0 }),
      стоимость: attr('Стоимость', { index: 1 })
    })
  });

  modelClass.defineProjection('АОПИL', 'i-i-s-hotel-а-о-п-и', {
    номерКомнаты: attr('Номер комнаты', { index: 0 })
  });
};
