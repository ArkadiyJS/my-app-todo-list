![todo](https://user-images.githubusercontent.com/98277765/190295470-f17dda17-0dff-47ea-bb51-efc6abb72cb5.png)

Стек React + Redux toolkit 
есть фильтрация и поиск  также: добавить,удалить,выполнить.

поиск сделан с помошью lodash.debounce 
тоесть реализован функционнал: когда вводишь значение в инпут поиска функция изменения value срабатывает не на каждый символ
а ждёт когда ты закончишь печатать и когда ты останавился печатать заносит всё значение в стейт
(это очень полезно когда реализуешь поиск через запрос на сервер чтобы не отправлять запрос на каждый символ)

1.git clone https://github.com/ArkadiyJS/my-app-todo-list.git

2.npm i

3.npm start
