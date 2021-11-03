# **Дипломный проект Movies Explorer от Yandex.Practicum. Выполнен студентом Ильей Коротковым**


![JavaScript](https://img.shields.io/badge/-JavaScript-f3de35?logo=javaScript&logoColor=black)
![Node](https://img.shields.io/badge/-Node.js-469837?logo=Node.js&logoColor=white)
![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/-MongoDB-56a14b?logo=mongodb&logoColor=white)

___

## Описание
Представляет из себя бэкенд-часть SPA приложения Movie Explorer. Написан на фреймворке Express для Node.js. В качестве базы данных используется MongoDB (Mongoose). Используются дополнительные библиотеки: Joi,celebrate (валидация данных), limiter(защита от DDoS-атак), helmet(выставление security-заголовков), winston (логгирование запросов и ошибок). Позволяет пользователям регистрироваться и авторизироваться в БД, изменять данные о себе, добавлять и удалять данные о фильмах из БД.

## Роуты
Для пользователей:</br>
<table>
<tr>
<td align="center"><strong>Запрос</strong></th>
<td align="center"><strong>Роут</strong></th>
<td align="center"> <strong>Описание</strong></th>
</tr>

<tr>
<td align="center">POST</td>
<td align="center">/signup</td>
<td>Создаёт пользователя с переданными name, email, password</td>
</tr>

<tr>
<td align="center">POST</td>
<td align="center">/signin</td>
<td>Проверяет переданные в теле почту и пароль и возвращает JWT</td>
</tr>

<tr>
<td align="center">GET</td>
<td align="center">/users/me</td>
<td>Возвращает информацию о пользователе (email и имя)</td>
</tr>

<tr>
<td align="center">PATCH</td>
<td align="center">/users/me</td>
<td>Обновляет информацию о пользователе (email и имя)</td>
</tr>
</table>


Для фильмов:</br>
<table>
<tr>
<td align="center"><strong>Запрос</strong></th>
<td align="center"><strong>Роут</strong></th>
<td align="center"> <strong>Описание</strong></th>
</tr>

<tr>
<td align="center">GET</td>
<td align="center">/movies</td>
<td>Возвращает все сохранённые пользователем фильмы</td>
</tr>

<tr>
<td align="center">POST</td>
<td align="center">/movies</td>
<td>Создаёт фильм с переданными в теле country, director, duration, year, description image, trailer, nameRU, nameEN и thumbnail, movieId</td>
</tr>

<tr>
<td align="center">DELETE</td>
<td align="center">/movies/movieId</td>
<td>Удаляет сохранённый фильм по id</td>
</tr>

</table>

## Стек

- Node.js
- Express.js
- MongoDB
- JavaScript
- API

## Установка

Для запуска на локальной машине необходимо:

1. Установить npm зависимости:</br>

```sh
npm install
```

2. Запустить MongoDB:

```sh
npm run mongod
```

3. Запустить в режиме разработки:</br>

```sh
npm run start  — запускает сервер
npm run dev — запускает сервер с hot-reload
```

Если все прошло успешно, проект будет запущен на `http://localhost:3001`
