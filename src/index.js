module.exports = function makeExchange(currency) {
    var coins = {};

    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else if (currency >= 1 && currency <= 10000) {
        const halfDollars = Math.trunc(currency / 50);
        const quarters = Math.trunc((currency % 50) / 25);
        const dimes = Math.trunc((currency % 50 % 25) / 10);
        const nickels = Math.trunc((currency % 50 % 25 % 10) / 5);
        const pennies = currency % 50 % 25 % 10 % 5;

        if (halfDollars > 0)
            coins.H = halfDollars;
        if (quarters > 0)
            coins.Q = quarters;
        if (dimes > 0)
            coins.D = dimes;
        if (nickels > 0)
            coins.N = nickels;
        if (pennies > 0)
            coins.P = pennies;
    
        return coins;
    } else {
        return {};
    }
}
