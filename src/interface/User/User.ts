import { Mappable } from "../CustomMap/CustomMap";
import { faker } from "@faker-js/faker";

export class User implements Mappable {
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()), 
      lng: parseFloat(faker.address.longitude())}
  };

  name: string;
  location: {
    lat: number;
    lng: number;
  };
  markerContent() : string {
    return `User name: ${this.name}`
  }
}

// { lat: 61.4981, lng: 23.761};
