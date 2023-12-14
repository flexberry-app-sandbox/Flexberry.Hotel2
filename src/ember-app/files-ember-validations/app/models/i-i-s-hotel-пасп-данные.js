import {
  defineNamespace,
  defineProjections,
  Model as ПаспДанныеMixin
} from '../mixins/regenerated/models/i-i-s-hotel-пасп-данные';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПаспДанныеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
