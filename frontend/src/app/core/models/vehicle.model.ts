import { JsonApiModelConfig, JsonApiModel, Attribute } from 'nab-angular2-jsonapi';

@JsonApiModelConfig({
  type: 'vehicles'
})
export class Vehicle extends JsonApiModel {
  
  @Attribute()
  vin: string;

}
