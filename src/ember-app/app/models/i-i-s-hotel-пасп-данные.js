import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПаспДанныеMixin
} from '../mixins/regenerated/models/i-i-s-hotel-пасп-данные';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПаспДанныеMixin, Validations, {
});

defineProjections(Model);

export default Model;
