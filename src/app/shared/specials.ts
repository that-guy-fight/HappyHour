import { DailySpecial } from './dailySpecial';

export class Specials {
    specialsList: DailySpecial[] = new Array();

    constructor(specials: any) {
        for (const special of specials) {
            this.addSpecial(special);
        }
    }

    addSpecial(special: any) {
        this.specialsList.push(new DailySpecial(special));
    }
}
