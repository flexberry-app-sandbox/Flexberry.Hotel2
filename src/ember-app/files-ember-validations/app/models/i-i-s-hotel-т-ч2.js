import {
  defineNamespace,
  defineProjections,
  Model as ТЧ2Mixin
} from '../mixins/regenerated/models/i-i-s-hotel-т-ч2';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧ2Mixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
