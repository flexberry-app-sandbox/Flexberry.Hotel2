import { Serializer as ЖРИГSerializer } from
  '../mixins/regenerated/serializers/i-i-s-hotel-ж-р-и-г';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЖРИГSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
