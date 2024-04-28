import { Mappable } from "../CustomMap/CustomMap";
import { faker } from "@faker-js/faker";

export class Company implements Mappable {
  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()), 
      lng: parseFloat(faker.address.longitude())}
  }

  name: string;
  catchPhrase: string;
  location: {
    lat: number,
    lng: number
  };

  markerContent(): string {
    return `
    <div>
      <h2>Company Name: ${this.name}</h2>
      <h3>Company slogan: ${this.catchPhrase}</h3>
    </div>
    `;
  }
};

// { lat: 60.2807, lng: 24.8453 };