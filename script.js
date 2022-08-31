const getS = selector => document.querySelector(selector);

/* start event to show edit*/
getS('.btn-edit').addEventListener('click', () => {
    getS('.edit-block').classList.add('show');
    getS('.style-block').classList.remove('show');
    getS('.edit-area').value = getS('.top-block').innerHTML;
})
/* end event to show edit*/

/* start event save*/
getS('.btn-save').addEventListener('click', () => {
    getS('.edit-block').classList.remove('show');
    getS('.top-block').innerHTML = getS('.edit-area').value;
})
/* end event save*/

/* start event to showstyle*/
getS('.btn-style').addEventListener('click', () => {
    getS('.style-block').classList.add('show');
    getS('.edit-block').classList.remove('show');

})
/* end event to show style*/

/* start event fontSize*/
getS('.form-size').addEventListener('click', () => {
    if (event.target.type == 'radio') {
        getS('.top-block').style.fontSize = event.target.value;
    }
})
/* end event fontSize*/

let fF = document.getElementById('fontFamily');
/* start event fontFamily*/
fF.addEventListener('change', () => {
    getS('.top-block').style.fontFamily = event.target.value;
})
/* end event fontFamily*/

/* start array and events for colors*/
let colors = ['red', 'green', 'blue', 'yellow', 'deeppink', 'orange', 'black', 'blueviolet', 'pink'];
for (let i = 0; i < getS('.colors').children.length; i++) {
    getS('.colors').children[i].style.backgroundColor = colors[i];
    getS('.colors').children[i].addEventListener('click', () => {
        if (getS('.btn-text-color').classList.contains('active')) {
            getS('.top-block').style.color = event.target.style.backgroundColor;
            getS('.colors').classList.add('hide');
            getS('.btn-text-color').classList.remove('active')
        }
        if (getS('.btn-bg-color').classList.contains('active')) {
            getS('.top-block').style.backgroundColor = event.target.style.backgroundColor;
            getS('.colors').classList.add('hide');
            getS('.btn-bg-color').classList.remove('active')
        }

    })
}

getS('.btn-text-color').addEventListener('click', () => {
    getS('.colors').classList.remove('hide');
    getS('.btn-text-color').classList.add('active')
})
getS('.btn-bg-color').addEventListener('click', () => {
    getS('.colors').classList.remove('hide');
    getS('.btn-bg-color').classList.add('active');
})
/* end array and events for colors*/

/* start event for bold style*/
getS('.text-bold').addEventListener('click', () => {
    if (event.target.checked) {
        getS('.top-block').classList.add('bold')
    } else {
        getS('.top-block').classList.remove('bold')
    }
})
/* end event for bold style*/

/* start event for cursive style*/
getS('.text-cursive').addEventListener('click', () => {
    if (event.target.checked) {
        getS('.top-block').classList.add('cursive')
    } else {
        getS('.top-block').classList.remove('cursive')
    }
})
/* end event for cursive style*/

/* start event to show first/second blocks*/
getS('.btn-add').addEventListener('click', () => {
    {
        getS('.first').classList.remove('show');
        getS('.second').classList.add('show');

    }
})
/* end event to show first/second blocks*/

/* start event to create list/table*/
document.forms['form-add'].addEventListener('click', () => {
    if (event.target.classList.contains('list')) {
        getS('.create-list').classList.add('show');
        getS('.create-table').classList.remove('show')
    }
    if (event.target.classList.contains('table')) {
        getS('.create-table').classList.add('show');
        getS('.create-list').classList.remove('show')

    }
})
/* end event to create list/table*/

/* start event to add new list*/
const list = document.forms['form-list'];
getS('.btn-create-list').addEventListener('click', () => {
    const countLi = list.count.value;
    const typeLi = list.type.value;
    getS('.edit-area').value += `<ul style="list-style-type=${typeLi}">`;
    for (let i = 0; i < countLi; i++) {
        getS('.edit-area').value += `<li>item${i+1}</li>`
    }
    getS('.edit-area').value += '</ul>';
    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
})
/* end event to add list*/

/* start event to add new table*/
const table = document.forms['form-table'];
getS('.btn-create-table').addEventListener('click', () => {
    const countTR = table.countTR.value;
    const countTD = table.countTD.value;
    const widthTD = table.widthTD.value;
    const heightTD = table.heightTD.value;
    const widthBorder = table.widthBorder.value
    const typeBorder = table.typeBorder.value;
    const colorBorder = table.colorBorder.value;
    getS('.edit-area').value += `<table>`;
    for (let i = 0; i < countTR; i++) {
        getS('.edit-area').value += '<tr>';
        for (let i = 0; i < countTD; i++) {
            getS('.edit-area').value += `<td style="width:${widthTD}px; height:${heightTD}px;border:${widthBorder}px ${typeBorder} ${colorBorder}">TD`;
            getS('.edit-area').value += '</td>';
        }
        getS('.edit-area').value += '</tr>';

    }
    getS('.edit-area').value += '</table>';
    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');

})
/* end event to add new table*/