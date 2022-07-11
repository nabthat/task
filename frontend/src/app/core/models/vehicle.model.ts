import { JsonApiModelConfig, JsonApiModel, Attribute, BelongsTo } from 'nab-angular2-jsonapi';
import { Location } from '@models/location.model'

@JsonApiModelConfig({
  type: 'vehicles'
})
export class Vehicle extends JsonApiModel {

  @Attribute()
  name: string;

  @Attribute()
  kind: string;

  @Attribute()
  status: string;
  
  @Attribute()
  vin: string;

  @Attribute()
  stock: string;

  @Attribute()
  year: number;

  @Attribute()
  make: string;

  @Attribute()
  model: string;

  @Attribute()
  trim: string;

  @Attribute()
  price: number;

  @Attribute()
  msrp: number;

  @Attribute()
  'monthly-payment': number;

  @BelongsTo()
  location: Location;

}
