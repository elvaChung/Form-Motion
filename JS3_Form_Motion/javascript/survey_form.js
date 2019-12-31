

// this event will load on the window
window.addEventListener('load', init);

function init() {
    // get reference to the cities' options
    var ary = document.querySelectorAll('option[name=vegi]');
    // add event listeners
    for (var i = 0; i < ary.length; i++) {
        ary[i].addEventListener('click', vegiChange);
    }

    // get reference to the next button
    var next = document.querySelector('#next');
    // add event listener
    next.addEventListener('click', describe);
    // get reference to submit button
    var sub = document.querySelector('#submit');
    // add event listener
    sub.addEventListener('click', submit);
}


function vegiChange(ev) {

    // get reference to the target which cities the event
    var target = ev.currentTarget;
    // get reference to the fieldset
    var field = target.parentNode;
    // extract the value of the selected cities
    var val = target.getAttribute('value');
    // make a switch statement based on the value
    switch (val) {
        case "tomato":
            field.style.backgroundColor = 'red';
            break;
        case "cucumber":
            field.style.backgroundColor = 'green';
            break;
        case "carrot":
            field.style.backgroundColor = 'orange';
            break;
        case "lettuce":
            field.style.backgroundColor = 'blue';
            break;
        case "onion":
            field.style.backgroundColor = 'yellow';
            break;
        case "none":
            field.style.backgroundColor = 'gray';
            break;
    }

}

function describe(ev) {
    // get reference to the textarea
    document.querySelector('#describe').style.display = 'block';
}

function submit(ev) {
    // create ending text
    var end = document.createElement('h2');
    end.textContent = "Thanks!";
    document.body.appendChild(end);
    // get reference to the submit button
    var submit = ev.currentTarget;
    submit.style.backgroundColor = 'red';

}	