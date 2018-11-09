
export class Coordinates {
    lat: any;
    lng: any;

    constructor(coords: any) {
        this.lat = parseFloat(coords.Lat);
        this.lng = parseFloat(coords.Lng);
    }
}
