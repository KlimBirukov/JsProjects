let chips = ''


function error() {
    alert("Error: incorrect value of players! Min=2, Max=5")
    location.reload();
    return
}

document.getElementById('btn-start').addEventListener('click', e => {
    let players = document.getElementById('writeCountOfPlayers').value
    if (players >= 2 && players <= 5) {
        for (let i = 1; i <= players; i++) {
            document.getElementById(`pl${i}`).style.display = 'block'
        }
        document.getElementById('menu').style.display = 'none'
        //document.querySelector('#pl').innerHTML = chips

    } else {
        error()
    }
})

document.getElementById('btn').addEventListener('click', e => {
    let msg = `Move yout chip by ${Math.floor(Math.random() * 6) + 1} elements`
    alert(msg)
})


dragElement(document.querySelector('#pl1'));
dragElement(document.querySelector('#pl2'));
dragElement(document.querySelector('#pl3'));
dragElement(document.querySelector('#pl4'));
dragElement(document.querySelector('#pl5'));

function dragElement(terrariumElement) {

    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + "px";
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + "px";
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}