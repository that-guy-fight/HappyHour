import { PhysicalAddress } from './physicalAddress';
import { Coordinates } from './coordinates';

export class Address {
    physicalAddress: any;
    coordinates: any;

    constructor(address: any) {
        this.physicalAddress = new PhysicalAddress(address.Physical);
        this.coordinates = new Coordinates(address.Coordinates);
    }
}
