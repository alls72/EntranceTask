
## Available Scripts

### `Задание 0. src/Task_0.js`

В ФП стиле реализовать 2 класса:<br>
+ Animal<br>
Свойства: type, name, run(), eat()<br>
+ Наследник Dog:<br>
Новый метод Bark(),  переопределить метод eat() -> Собаки не едят собак.<br>

### `Задание 1. src/Task_1.js`
Игра крестики-нолики.

### `Задание 2. src/Task_2.js`
В ES6 стиле написать адаптер данных из JSON:

{<br>id: number,<br> 
title: string,<br>
 descriptions: string,<br>
  full_name: string,<br>
   author: string,<br>
    guid: string,<br> 
    time: Date<br>}<br>

=> 
<br>
{<br>
data: id, guid, title<br>
meta: descriptions, full_name, author, time<br>
error: null<br>
}<br>

И добавить методы:<br>

getId()<br>
getGuid()<br>
setProperty() - только data<br>
setMetaProperty() - только meta<br>
getProperty()<br>
getMetaProperty()<br>

 

