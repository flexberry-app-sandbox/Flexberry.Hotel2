import { Serializer as АдминSerializer } from
  '../mixins/regenerated/serializers/i-i-s-hotel-админ';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(АдминSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
