import { Specials } from './specials';
import { Address } from './address';
import { SocialMedia } from './socialMedia';

export class Location {
    locId: number;
    name: string;
    specials: Specials;
    address: Address;
    phone: string;
    social: SocialMedia;

    constructor(location: any) {
        this.locId = location.LocId;
        this.name = location.Name;
        this.specials = new Specials(location.Specials);
        this.address = new Address(location.Address);
        this.phone = location.Phone;
        this.social = new SocialMedia(location.Social);
    }
}
