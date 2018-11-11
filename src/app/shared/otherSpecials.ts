
export class OtherSpecials {
    specialsList: string[] = new Array();

    constructor(otherSpecials: any) {
        if (!!otherSpecials) {
            for (const special of otherSpecials) {
                this.specialsList.push(special);
            }
        }
    }
}
