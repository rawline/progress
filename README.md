<h1>Реализация блока Progress для тестового задания.</h1>

<p>Блок реализован с помощью svg графики. Для переиспользования блока необходимо создать экземпляр класса Progress и передать в конструктор svg элемент. В классе Progoress так же указаны константы, которые отвечают за правильное отображение прогресса</p>

<ul>
  <p>Настройка параметров реализована блгодоря методам:</p>
  <li>setValue(value): устанавливаем значение</li>
  <li>stopAnimation: метод для остановки анимации</li>
  <li>startAnimation: метод для старта анимации</li>
  <li>hide: метод, который скрывает блок с экрана</li>
  <li>show: метод, который делает скрытый блок вновь видимым</li>
</ul>

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

Ссылка на деплой: <a href="https://rawline.github.io/progress/">https://rawline.github.io/progress/<a>
