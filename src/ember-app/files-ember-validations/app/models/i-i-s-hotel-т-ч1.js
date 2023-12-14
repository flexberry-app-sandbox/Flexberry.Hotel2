import {
  defineNamespace,
  defineProjections,
  Model as ТЧ1Mixin
} from '../mixins/regenerated/models/i-i-s-hotel-т-ч1';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧ1Mixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
