var rsvp = 0;

const rsvpCounter = async (event) => {
    event.preventDefault();
    const counter = document.querySelector('#rsvpCounter');

    rsvp = rsvp + 1;
    counter.innerHTML = rsvp;
}



document
.querySelector('#rsvpButton')
.addEventListener('click', rsvpCounter);
