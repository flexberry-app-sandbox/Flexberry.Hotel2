import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имущество: DS.attr('string'),
  стоимость: DS.attr('number'),
  аОПИ: DS.belongsTo('i-i-s-hotel-а-о-п-и', { inverse: 'тЧ1', async: false })
});

export let ValidationRules = {
  имущество: {
    descriptionKey: 'models.i-i-s-hotel-т-ч1.validations.имущество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-hotel-т-ч1.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  аОПИ: {
    descriptionKey: 'models.i-i-s-hotel-т-ч1.validations.аОПИ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧ1E', 'i-i-s-hotel-т-ч1', {
    имущество: attr('Имущество', { index: 0 }),
    стоимость: attr('Стоимость', { index: 1 })
  });
};
