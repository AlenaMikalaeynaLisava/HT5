let array = [{id: 1, name: 'Masha', age: 20, books: ['Harry Potter']},
             {id: 2, name: 'Misha', age: 28, books: ['Tanya Grotter']}, 
             {id: 3, name: 'Mustafa', age: 48, books: ['Not a reader']},
            ];

let div = document.createElement('div');
div.className = "container";
document.body.append(div);
let table = document.createElement('table');
div.prepend(table);
let thead = document.createElement('thead');
table.prepend(thead);
let tr1 = document.createElement('tr');
tr1.className = 'tr1';
thead.prepend(tr1);
let tbody = document.createElement('tbody');
table.append(tbody);
let tr = document.createElement('tr');
tr.className = "tr";
tbody.prepend(tr);
let tr2 = document.createElement('tr');
tr2.className = "t2";
tbody.append(tr2);

let th;
let td;

function getListContent1(arrayElement, ElementToCreate, ParentElementForCreation) {
    for (let key in array[arrayElement]) {
        if(ElementToCreate == th){
            th = document.createElement('th'); 
            th.innerHTML = array[arrayElement][key];
            ParentElementForCreation.append(th);
            th.style.border = "thick solid #0000FF"; 
         }else { td = document.createElement('td');
            td.innerHTML = array[arrayElement][key];
            ParentElementForCreation.append(td);
            td.style.border = "thick solid #0000FF"; 
                }
    }
}
              
getListContent1(0, th, tr1);
getListContent1(1, td, tr);
getListContent1(2, td, tr2);

document.body.style.backgroundColor = 'green';



   