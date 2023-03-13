let counter = 0;


// increment function
function increment() {
    counter = counter + 1;
    document.getElementById('counter').innerHTML = counter;
}

// decrement function
function decrement() {
    counter = counter - 1;
    document.getElementById('counter').innerHTML = counter;
}

// reset button function
function reset() {
    counter = 0;
    document.getElementById('counter').innerHTML = counter;
}