
export class DailySpecial {
    day: string;
    drinks: null;
    food:  null;
    other: null;

    constructor(special: any) {
        this.day = special.Day;
        this.drinks = special.Drinks;
        this.food = special.Food;
        this.other = special.Other;
    }
}
