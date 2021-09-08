const date = new Date()
const monthDays = document.querySelector('#days');
const currentDate = new Date();

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const renderCalendar = () => {

    document.querySelector('.date h1').innerHTML = months[date.getMonth()] + ' ' + date.getFullYear()
    document.querySelector('.date p').innerHTML = currentDate.toDateString()

    date.setDate(1)
    let days = ''

    let firstDayIndex = date.getDay()
    let lastDayInPreviousMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    for (let i = firstDayIndex; i > 0; i--) {
        days += `<div class="prev-date">${lastDayInPreviousMonth - i}</div>`
    }

    let lastDayInCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    for (let i = 1; i <= lastDayInCurrentMonth; i++) {
        if (i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth() &&
            date.getFullYear() === new Date().getFullYear()) {
            days += `<div class="today">${i}</div>`
        } else if (i < new Date().getDate() &&
            date.getMonth() === new Date().getMonth() &&
            date.getFullYear() === new Date().getFullYear()) {
            days += `<div>${i}</div>`
        } else if (date.getMonth() >= new Date().getMonth() &&
            date.getFullYear() >= new Date().getFullYear()) {
            days += `<div class = "future">${i}</div>`
        } else {
            days += `<div>${i}</div>`
        }
    }

    let lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    let nextDay = 7 - lastDayIndex - 1
    if (nextDay === 0) {
        nextDay = 7
    }
    for (let i = 1; i <= nextDay; i++) {
        days += `<div class="future next-date">${i}</div>`
    }
    monthDays.innerHTML = days;
}


document.querySelector('.prev').addEventListener('click', e => {
    date.setMonth(date.getMonth() - 1)
    renderCalendar()
})

document.querySelector('.next').addEventListener('click', e => {
    date.setMonth(date.getMonth() + 1)
    renderCalendar()
})
renderCalendar()

// ---------------------------------------------------------------------- //

const outer = document.getElementById('outer')
const specialFon = document.getElementById('special-fon')
const form = document.getElementById('form')
let dateToForm = ''


document.getElementById('days').addEventListener('click', e => {
    if (e.target.className === 'future') {
        dateToForm = e.target.innerHTML
        e.target.classList.add('active')
    
        outer.style.display = 'block'
        outer.style.zIndex = '2'
        specialFon.style.display = 'block'
    }
})

document.getElementById('btn-deny').addEventListener('click', e => {
    outer.style.display = 'none'
    outer.style.zIndex = '0'
    specialFon.style.display = 'none'
    document.querySelector('.active').classList.remove('active')
})

document.getElementById('btn-create').addEventListener('click', e => {
    outer.style.display = 'none'
    document.getElementById('field-blank').innerHTML = `Fill the fields for the ${dateToForm} date`
    outer.style.zIndex = '0'
    form.style.display = 'block'
    form.style.zIndex = '2'
})

document.getElementById('btn-deny2').addEventListener('click', e => {
    form.style.display = 'none'
    form.style.zIndex = '0'
    specialFon.style.display = 'none'
})


document.getElementById('btn-create2').addEventListener('click', e => {
    let name = '' + document.getElementById('name').value;
    let time = '' + document.getElementById('time').value;
    let about = '' + document.getElementById('about').value.split('\n').filter(str => str.length > 1);

    form.style.display = 'none'
    form.style.zIndex = '0'
    specialFon.style.display = 'none'

    document.querySelector('.active').classList.add('event')
    document.querySelector('.active').classList.remove('active')
    document.querySelector('.event').classList.remove('future')
})

document.getElementById('days').addEventListener('dblclick', e => {
    if(e.target.className === 'event') {
        e.target.classList.add('future')
        e.target.classList.remove('event')
    }
})

// ---------------------------------------------------------------------- //


