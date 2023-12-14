import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерК: DS.attr('number'),
  прибытие: DS.attr('date'),
  убытие: DS.attr('date'),
  админ: DS.belongsTo('i-i-s-hotel-админ', { inverse: null, async: false }),
  персонал: DS.belongsTo('i-i-s-hotel-персонал', { inverse: null, async: false })
});

export let ValidationRules = {
  номерК: {
    descriptionKey: 'models.i-i-s-hotel-анкета-к.validations.номерК.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  прибытие: {
    descriptionKey: 'models.i-i-s-hotel-анкета-к.validations.прибытие.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  убытие: {
    descriptionKey: 'models.i-i-s-hotel-анкета-к.validations.убытие.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  админ: {
    descriptionKey: 'models.i-i-s-hotel-анкета-к.validations.админ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  персонал: {
    descriptionKey: 'models.i-i-s-hotel-анкета-к.validations.персонал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АнкетаКE', 'i-i-s-hotel-анкета-к', {
    номерК: attr('Номер К', { index: 0 }),
    прибытие: attr('Прибытие', { index: 1 }),
    убытие: attr('Убытие', { index: 2 }),
    админ: belongsTo('i-i-s-hotel-админ', 'Админ', {

    }, { index: 3 }),
    персонал: belongsTo('i-i-s-hotel-персонал', 'Персонал', {

    }, { index: 4 })
  });

  modelClass.defineProjection('АнкетаКL', 'i-i-s-hotel-анкета-к', {
    номерК: attr('Номер К', { index: 0 }),
    прибытие: attr('Прибытие', { index: 1 }),
    убытие: attr('Убытие', { index: 2 })
  });
};
