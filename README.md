![todo](https://user-images.githubusercontent.com/98277765/190295470-f17dda17-0dff-47ea-bb51-efc6abb72cb5.png)

Стек React + Redux toolkit 
есть фильтрация и поиск  также: добавить,удалить,выполнить.

фичи:
<br>
1)поиск сделан с помошью lodash.debounce 
<br>
тоесть реализован функционнал: когда вводишь значение в инпут поиска 
<br>
функция изменения value срабатывает не на каждый символ
<br>
а ждёт когда ты закончишь печатать
<br>
и затем заносит всё значение в стейт
<br>
(это очень полезно когда реализуешь поиск через запрос на сервер чтобы не отправлять запрос на каждый символ)
<br>
2)кнопка отправить дисэйблидся если поле ввода пустое
<br>
3)отправка по Enter

1.git clone https://github.com/ArkadiyJS/my-app-todo-list.git

2.npm i

3.npm start
