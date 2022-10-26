let store = localStorage.hours ? JSON.parse(localStorage.hours) : [];
document.getElementById("currentDay").innerText = moment().format('llll');
store.length ? store.forEach((item, i) => $('textarea').eq(i).val(item)) : '';

let cH = moment().format('H');

for (let i = 0; i < $("textarea").length; i++) {
    let rH = 5 + i;
    rH<cH ? $('textarea').eq(i).addClass('past') :
    rH>cH ? $('textarea').eq(i).addClass('future') :
    $('textarea').eq(i).addClass('present')
};

const handleClick = () => {
    store = [];

    for (let i = 0; i < $('textarea').length; i++) {
        store.push($('textarea').eq(i).val())
    }

    localStorage.hours = JSON.stringify(store);
};
$('button').on('click', handleClick);






// if time = current time then turn red
// else if (time is past, then turn grey)
// else if (time is future, then turn green)


// save input until changed

// use moment.js