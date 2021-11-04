const car = {
    color : 'Red',
    gasMileage : 40,
    gas : 20
};

const use = 5;

console.log('車両の色は'　+ car.color);
console.log('gasを'+ use +'L使用した場合の走行距離は'　+ 　(car.gasMileage * use) +'km、残りのgas燃料は' + (car.gas-use) + 'Lです。')


//１問目
const car = {
    color: 'Red',
    gasMileage: 40,
    gas: 20
}
const carRunkm = 5 * car.gasMileage;
car.gas = car.gas - 5;

console.log('車両の色は' + car.color)
console.log('gas５Lを使用した場合の走行距離は' + carRunkm + 'km、残りのgas容量は' + car.gas + 'Lです')

