let array = [{id: 1, name: 'Masha', age: 20, books: ['Harry Potter']},
             {id: 2, name: 'Misha', age: 28, books: ['Tanya Grotter']}, 
             {id: 3, name: 'Mustafa', age: 48, books: ['Not a reader']},
            ];

let div = document.createElement('div');
div.className = "container";
document.body.append(div);
let table = document.createElement('table');
div.append(table);
let thead = document.createElement('thead');
table.append(thead);
let TheadRow = document.createElement('tr');
TheadRow.className = 'TheadRow';
thead.append(TheadRow);

let tbody = document.createElement('tbody');
table.append(tbody);
let FirstTbodyRow = document.createElement('tr');
FirstTbodyRow.className = "FirstTbodyRow";
tbody.prepend(FirstTbodyRow);
let SecondTbodyRow = document.createElement('tr');
SecondTbodyRow.className = "SecondTbodyRow";
tbody.append(SecondTbodyRow);

let th;
let td;

for (let key in array[0]) {
    console.log (array[0][key]);
        th = document.createElement('th'); 
        th.innerHTML = array[0][key];
        TheadRow.append(th);
        th.style.border = "thick solid #0000FF"; 
     };

for (let key in array[1]) {
    console.log (array[1][key]);
    td = document.createElement('td');
    td.innerHTML = array[1][key];
    FirstTbodyRow.append(td);
    td.style.border = "thick solid #0000FF"; 
     };

for (let key in array[2]) {
    console.log (array[2][key]);
    td = document.createElement('td');
    td.innerHTML = array[2][key];
    SecondTbodyRow.append(td);
    td.style.border = "thick solid #0000FF"; 
     };




/*function getListContent1(arrayElementNumber, ElementToCreate, ParentElementForCreation) {
    for (let key in arrayElementNumber) {
            if(ElementToCreate === th){
            th = document.createElement('th'); 
            th.innerHTML = arrayElementNumber[key];
            ParentElementForCreation.append(th);
            th.style.border = "thick solid #0000FF"; 
         }else { td = document.createElement('td');
            td.innerHTML = arrayElementNumber[key];
            ParentElementForCreation.append(td);
            td.style.border = "thick solid #0000FF"; 
                }
    }
}
              
getListContent1(array[0], th, tr);
getListContent1(array[1], td, tr1);
getListContent1(array[2], td, tr2);*/

document.body.style.backgroundColor = 'green';



   
