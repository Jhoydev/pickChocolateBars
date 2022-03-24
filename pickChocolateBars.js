const inputs =  [
    [1,1,1],
    [0,1,2,2],
    [1,2,3,2,2],
    [3,3,3,1,2,1,1,2,3,3,4]
]
for (let input of inputs) console.log(`Bars = ${input}  - maximum numbers bars: ${pickBars(input)}`)

function pickBars(bars){
    let barsLength = bars.length;
    if (barsLength >= 100) return console.log('Bars length limit 100')
    let maxBars = 0
    return bars.reduce((acc, currentValue, index)=>{
        let total = 0
        let basket_left = currentValue
        let basket_right = bars[index + 1]
        for(let i = index; i < barsLength; i++){
            if(basket_left === basket_right){
                basket_right = bars[i];
            }

            if (!(bars[i] === basket_left || bars[i] === basket_right)) {
                break;
            }
            total += 1;
        }

        maxBars = ((total <= barsLength) && (total > maxBars)) ? total : maxBars
        return maxBars
    }, maxBars)
}






