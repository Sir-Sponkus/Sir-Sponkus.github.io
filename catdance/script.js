var count = 0;
var readCount = 0;
var playing = false;
const timer = setInterval(() => {
    count += 0.01;
    readCount == count;

    
    document.getElementById("counter").innerHTML = number_format(count, 2)
}, 10)

function number_format(val, decimals){
    val = parseFloat(val);
    return val.toFixed(decimals);
}