import { JsonApiModelConfig, JsonApiModel, Attribute } from 'nab-angular2-jsonapi';

@JsonApiModelConfig({
  type: 'locations'
})
export class Location extends JsonApiModel {

  @Attribute()
  name: string;

  @Attribute()
  city: string;

  @Attribute()
  state: string;

  @Attribute()
  zipcode: string;

  @Attribute()
  street: string;

  get combinedName() : string {
    return [this.name, this.city, this.street, this.state, this.zipcode].join(', ')
  }

}
