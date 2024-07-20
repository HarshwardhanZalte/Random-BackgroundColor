const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let mytime;

document.querySelector('#start').addEventListener('click', function () {
    mytime = setInterval(function () {
        document.body.style.backgroundColor = randomColor();
        document.querySelector('p').innerHTML = `Color Code = "${randomColor()}"`
    }, 1000)
});

document.querySelector('#stop').addEventListener('click', function () {
    clearInterval(mytime);
    console.log("Stopped")
})