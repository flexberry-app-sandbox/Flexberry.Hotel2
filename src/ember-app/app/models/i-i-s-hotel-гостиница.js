import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ГостиницаMixin
} from '../mixins/regenerated/models/i-i-s-hotel-гостиница';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ГостиницаMixin, Validations, {
});

defineProjections(Model);

export default Model;
