import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  должность: DS.belongsTo('i-i-s-hotel-должность', { inverse: null, async: false }),
  паспДанные: DS.belongsTo('i-i-s-hotel-пасп-данные', { inverse: null, async: false })
});

export let ValidationRules = {
  должность: {
    descriptionKey: 'models.i-i-s-hotel-персонал.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  паспДанные: {
    descriptionKey: 'models.i-i-s-hotel-персонал.validations.паспДанные.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПерсоналE', 'i-i-s-hotel-персонал', {
    паспДанные: belongsTo('i-i-s-hotel-пасп-данные', 'Пасп данные', {
      фИО: attr('ФИО', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'фИО' }),
    должность: belongsTo('i-i-s-hotel-должность', 'Должность', {
      название: attr('Название', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'название' })
  });

  modelClass.defineProjection('ПерсоналL', 'i-i-s-hotel-персонал', {
    паспДанные: belongsTo('i-i-s-hotel-пасп-данные', 'ФИО', {
      фИО: attr('ФИО', { index: 0 })
    }, { index: -1, hidden: true }),
    должность: belongsTo('i-i-s-hotel-должность', 'Название', {
      название: attr('Название', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
