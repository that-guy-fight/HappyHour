
export class PhysicalAddress {
    street: any;
    city: any;
    state: any;
    zip: any;

    constructor(address: any){
        this.street = address.Street;
        this.city = address.City;
        this.state = address.State;
        this.zip = address.Zip;
    }
}