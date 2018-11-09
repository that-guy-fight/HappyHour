import { Location } from './location';

export class Locations {
    locations: Location[] = new Array();

    constructor(locations: any) {
        for (const location of locations) {
            this.addLocation(location);
        }
    }

    addLocation(location: any) {
        this.locations.push(new Location(location));
    }
}
