import { DailySpecial } from './dailySpecial';

export class Specials {
    specials: DailySpecial[] = new Array();

    constructor(specials: any) {
        for (const special of specials) {
            this.addSpecial(special);
        }
    }

    addSpecial(special: any) {
        this.specials.push(new DailySpecial(special));
    }
}
