const firstDate = Date.now();

setInterval(() => {
    let date = Date.now();
    let seconds = Math.floor((date - firstDate) / 1000);
    if (seconds % 5 === 0) {
        document.getElementById("border").style.border = "solid 1px yellow";
    }
    else {
        document.getElementById("border").style.border = "solid 1px green";
    }
}, 1000)