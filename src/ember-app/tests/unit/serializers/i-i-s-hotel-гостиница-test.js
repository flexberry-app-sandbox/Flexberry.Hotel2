import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-hotel-гостиница', 'Unit | Serializer | i-i-s-hotel-гостиница', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-hotel-гостиница',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
