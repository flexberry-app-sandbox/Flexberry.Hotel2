import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-hotel-т-ч2', 'Unit | Model | i-i-s-hotel-т-ч2', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-hotel-а-о-п-и',
    'model:i-i-s-hotel-админ',
    'model:i-i-s-hotel-анкета-к',
    'model:i-i-s-hotel-гостиница',
    'model:i-i-s-hotel-должность',
    'model:i-i-s-hotel-ж-р-и-г',
    'model:i-i-s-hotel-пасп-данные',
    'model:i-i-s-hotel-персонал',
    'model:i-i-s-hotel-т-ч1',
    'model:i-i-s-hotel-т-ч2',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
