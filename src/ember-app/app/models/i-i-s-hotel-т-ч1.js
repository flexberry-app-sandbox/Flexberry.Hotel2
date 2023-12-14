import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧ1Mixin
} from '../mixins/regenerated/models/i-i-s-hotel-т-ч1';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧ1Mixin, Validations, {
});

defineProjections(Model);

export default Model;
