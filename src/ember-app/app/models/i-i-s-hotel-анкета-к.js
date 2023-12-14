import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as АнкетаКMixin
} from '../mixins/regenerated/models/i-i-s-hotel-анкета-к';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(АнкетаКMixin, Validations, {
});

defineProjections(Model);

export default Model;
