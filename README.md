<h1>Реализация блока Progress для тестового задания.</h1>

Ссылка на деплой: <a href="https://rawline.github.io/progress/">https://rawline.github.io/progress/<a>

<p>Блок реализован с помощью svg графики. Для переиспользования блока необходимо создать экземпляр класса Progress и передать в конструктор svg элемент. В классе Progoress так же указаны константы, которые отвечают за правильное отображение прогресса</p>


### Настройка параметров реализована блгодоря методам:


<table class="table">
  <thead>
    <tr>
      <th>Методы</th>
      <th>Тип аргумента</th>
      <th>Описание</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>setValue()</td>
      <td>int</td>
      <td>Выполняет заполнение прогресса на передоваемое значение. Передоваемое значение должно быть > 0 && < 100 </td>
    </tr>
    <tr>
      <td>startAnimation()</td>
      <td>-</td>
      <td>Запускает анимацию вращения прогресса по часовой стрелке</td>
    </tr>
    <tr>
      <td>stopAnimation()</td>
      <td>-</td>
      <td>Останавливает анимацию вращения прогресса по часовой стрелке. Положение принимает исходное состояние</td>
    </tr>
    <tr>
      <td>hide()</td>
      <td>-</td>
      <td>Скрывает блок с экрана</td>
    </tr>
    <tr>
      <td>show()</td>
      <td>-</td>
      <td>Показывает блок вновь</td>
    </tr>
  </tbody>
</table>

## Использование
### 1. Импортируйте класс Progress
```javascript
import Progress from './Progress.js';
```
### 2. Создайте экземпляр класса Progress. В конструктор необходимо передать svg элемент на странице
```javascript
const progressElement = document.getElementById('progress');
const progress = new Progress(progressElement);
```
### 3. Получить доступ к состояниям можно получить с помощью следующих методов
```javascript
progress.setValue(50); // заполнение на половину
progress.startAnimation(); // запуск анимации
progress.stopAnimation(); // остановка анимации
progress.hide(); // убрать блок со страницы
progress.show(); // показать блок снова
```

