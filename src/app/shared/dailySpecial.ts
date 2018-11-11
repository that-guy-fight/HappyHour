import { DrinkSpecials } from './drinkSpecials';
import { FoodSpecials } from './foodSpecials';
import { OtherSpecials } from './otherSpecials';

export class DailySpecial {
    day: string;
    drinks: DrinkSpecials;
    food:  FoodSpecials;
    other: OtherSpecials;

    constructor(special: any) {
        this.day = special.Day;
        this.drinks = new DrinkSpecials(special.Drinks);
        this.food = new FoodSpecials(special.Food);
        this.other = new OtherSpecials(special.Other);
    }
}
