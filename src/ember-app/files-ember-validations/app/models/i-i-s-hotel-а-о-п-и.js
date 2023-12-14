import {
  defineNamespace,
  defineProjections,
  Model as АОПИMixin
} from '../mixins/regenerated/models/i-i-s-hotel-а-о-п-и';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(АОПИMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
