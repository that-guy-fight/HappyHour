
export class DrinkSpecials {
    specialsList: string[] = new Array();

    constructor(drinkSpecials: any) {
        if (!!drinkSpecials) {
            for (const special of drinkSpecials) {
                this.specialsList.push(special);
            }
        }
    }
}
