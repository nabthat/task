import { JsonApiModelConfig, JsonApiModel, Attribute, BelongsTo } from 'nab-angular2-jsonapi';
import { Location } from '@models/location.model'

@JsonApiModelConfig({
  type: 'vehicles'
})
export class Vehicle extends JsonApiModel {

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

  @BelongsTo()
  location: Location;

  get name(): string {
    return [this.make, this.model, this.trim].join(' ')
  }

  get translatedStatus(): string {
    let translatedStatus: string = 'Unknown'
    switch(this.status) {
      case 'in_transit':
        translatedStatus = 'In Transit'
        break;
      case 'available':
        translatedStatus = 'Available'
        break;
      case 'sold':
        translatedStatus = 'Sold'
        break;
      default:
        translatedStatus = 'Unknown'
    }
    return translatedStatus
  }

}
