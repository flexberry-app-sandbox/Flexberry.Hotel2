import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as АОПИMixin
} from '../mixins/regenerated/models/i-i-s-hotel-а-о-п-и';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(АОПИMixin, Validations, {
});

defineProjections(Model);

export default Model;
