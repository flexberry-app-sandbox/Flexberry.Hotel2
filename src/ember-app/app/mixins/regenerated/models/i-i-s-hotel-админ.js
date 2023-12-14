import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  гостиница: DS.belongsTo('i-i-s-hotel-гостиница', { inverse: null, async: false }),
  персонал: DS.belongsTo('i-i-s-hotel-персонал', { inverse: null, async: false })
});

export let ValidationRules = {
  гостиница: {
    descriptionKey: 'models.i-i-s-hotel-админ.validations.гостиница.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  персонал: {
    descriptionKey: 'models.i-i-s-hotel-админ.validations.персонал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АдминE', 'i-i-s-hotel-админ', {
    гостиница: belongsTo('i-i-s-hotel-гостиница', 'Гостиница', {
      название: attr('Название', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'название' }),
    персонал: belongsTo('i-i-s-hotel-персонал', 'Персонал', {

    }, { index: 2 })
  });

  modelClass.defineProjection('АдминL', 'i-i-s-hotel-админ', {
    гостиница: belongsTo('i-i-s-hotel-гостиница', 'Название', {
      название: attr('Название', { index: 0 })
    }, { index: -1, hidden: true })
  });
};
