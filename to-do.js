let d = new Date();
let date = d.getDate();
let year = d.getFullYear();
let month = d.getMonth();
let monthArr = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
month = monthArr[month];
document.getElementById("date").innerHTML=date+" "+month+", "+year;

const itemInput = document.getElementById('itemInput');
const btnAdd = document.getElementById('btnAdd');
const itemOutput = document.getElementById('itemOutput');

btnAdd.addEventListener('click', () => {
    let item = itemInput.value;

    if (item.trim() === '') {
        alert('Please add an item');
        return;
    }

    let listItem = document.createElement('li');
    let spanItem = document.createElement('span');
    spanItem.textContent = item;
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', () => {
        itemOutput.removeChild(listItem);
    });

    listItem.appendChild(spanItem);
    listItem.appendChild(deleteButton);
    itemOutput.appendChild(listItem)

    itemInput.value = '';
    itemInput.focus();

});