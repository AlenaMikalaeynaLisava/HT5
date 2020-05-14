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

for(i=0; i<array.length; i++){
    for (let key in array[i]) {
        //console.log (array[i][key]);
        if(i==0){
         th = document.createElement('th'); 
         th.innerHTML = array[i][key];
        TheadRow.append(th);
        th.style.border = "thick solid #0000FF"; 
        }else if(i==1){
        td = document.createElement('td');
        td.innerHTML = array[i][key];
        FirstTbodyRow.append(td);
        td.style.border = "thick solid #0000FF"; 
        }else{
        td = document.createElement('td');
        td.innerHTML = array[i][key];
        SecondTbodyRow.append(td);
        td.style.border = "thick solid #0000FF"; 
        }     
         };
}




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



   
