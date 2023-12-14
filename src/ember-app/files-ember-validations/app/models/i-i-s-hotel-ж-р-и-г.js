import {
  defineNamespace,
  defineProjections,
  Model as ЖРИГMixin
} from '../mixins/regenerated/models/i-i-s-hotel-ж-р-и-г';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЖРИГMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
