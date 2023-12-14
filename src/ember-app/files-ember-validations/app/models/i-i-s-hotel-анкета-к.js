import {
  defineNamespace,
  defineProjections,
  Model as АнкетаКMixin
} from '../mixins/regenerated/models/i-i-s-hotel-анкета-к';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(АнкетаКMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
