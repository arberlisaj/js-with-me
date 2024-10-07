const plant = document.querySelector('#plant1');
dragElement(plant);

document.querySelector('button').addEventListener('click', () => {
  plant.style.top = '40px';
  plant.style.left = '0px';
});

function dragElement(terrariumElement) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  terrariumElement.onpointerdown = pointerDrag;

  function pointerDrag(e) {
    e.preventDefault();
    console.log(e);
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
  }

  function elementDrag(e) {
    // pos1 = where the Xmouse WAS - where it IS
    pos1 = pos3 - e.clientX;
    // pos2 = where the Ymouse WAS - where it IS
    pos2 = pos4 - e.clientY;
    //reset pos3 to current location of Xmouse
    pos3 = e.clientX;
    //reset pos4 to current location of Ymouse
    pos4 = e.clientY;

    terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
    terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
  }

  function stopElementDrag() {
    document.onpointerup = null;
    document.onpointermove = null;
  }
}
