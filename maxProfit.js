const maxProfit = function(prices) {
    // index values to point to buy price and sell price
    let buyIndex = 0
    let sellIndex = 1
    let maxProfit = 0

    // traverse prices array
    while (sellIndex < prices.length) {
        if (prices[buyIndex] < prices[sellIndex]) {
            // calculate profit of current lowest price (buyIndex) and current sellIndex price
            let profit = prices[sellIndex] - prices[buyIndex]
            // compare current profit to maxProfit, set maxProfit to higher value
            maxProfit = Math.max(profit, maxProfit)
        } else {
            //if new price at sellIndex is lower than current buyIndex price, set buyIndex to sellIndex
            buyIndex = sellIndex
        }
        sellIndex ++
    }

    return maxProfit
}