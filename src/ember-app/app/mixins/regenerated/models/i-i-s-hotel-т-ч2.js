import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерКомнаты: DS.attr('number'),
  прибытие: DS.attr('date'),
  убытие: DS.attr('date'),
  персонал: DS.belongsTo('i-i-s-hotel-персонал', { inverse: null, async: false }),
  жРИГ: DS.belongsTo('i-i-s-hotel-ж-р-и-г', { inverse: 'тЧ2', async: false })
});

export let ValidationRules = {
  номерКомнаты: {
    descriptionKey: 'models.i-i-s-hotel-т-ч2.validations.номерКомнаты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  прибытие: {
    descriptionKey: 'models.i-i-s-hotel-т-ч2.validations.прибытие.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  убытие: {
    descriptionKey: 'models.i-i-s-hotel-т-ч2.validations.убытие.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  персонал: {
    descriptionKey: 'models.i-i-s-hotel-т-ч2.validations.персонал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  жРИГ: {
    descriptionKey: 'models.i-i-s-hotel-т-ч2.validations.жРИГ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧ2E', 'i-i-s-hotel-т-ч2', {
    номерКомнаты: attr('Номер комнаты', { index: 0 }),
    прибытие: attr('Прибытие', { index: 1 }),
    убытие: attr('Убытие', { index: 2 }),
    персонал: belongsTo('i-i-s-hotel-персонал', 'Персонал', {

    }, { index: 3 })
  });
};
