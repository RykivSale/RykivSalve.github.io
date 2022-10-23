import {makeAutoObservable} from "mobx";

export default class CoinsService {
    constructor() {
        this._coins = 0
        makeAutoObservable(this)
    }
setCoins(coins) {
    this._coins = coins
}
get Coins() {
    return this._coins 
}

}
