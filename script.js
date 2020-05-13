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
let tr = document.createElement('tr');
tr.className = 'tr';
thead.append(tr);

let tbody = document.createElement('tbody');
table.append(tbody);
let tr1 = document.createElement('tr');
tr1.className = "tr1";
tbody.prepend(tr1);
let tr2 = document.createElement('tr');
tr2.className = "t2";
tbody.append(tr2);

let th;
let td;

for (let key in array[0]) {
        th = document.createElement('th'); 
        th.innerHTML = array[0][key];
        tr.append(th);
        th.style.border = "thick solid #0000FF"; 
     };

for (let key in array[1]) {
    td = document.createElement('td');
    td.innerHTML = array[1][key];
    tr1.append(td);
    td.style.border = "thick solid #0000FF"; 
     };

for (let key in array[2]) {
    td = document.createElement('td');
    td.innerHTML = array[2][key];
    tr2.append(td);
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



   
