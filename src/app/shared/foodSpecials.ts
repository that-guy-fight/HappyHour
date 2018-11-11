
export class FoodSpecials {
    specialsList: string[] = new Array();

    constructor(foodSpecials: any) {
        if (!!foodSpecials) {
            for (const special of foodSpecials) {
                this.specialsList.push(special);
            }
        }
    }
}
