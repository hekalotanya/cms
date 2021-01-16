# CMS DEMO by Hekalo Tanya
[CMS](https://hekalotanya.github.io/cms/)

Характеристики:
### BACKEND
- База данных - PostgreSQL
В качестве базы данных была выбрана Postgres, т.к. это высоконадежная, стабильная, масштабируемая и безопасная система, которая существует уже более двух десятилетий. Таким образом, она стала достойным конкурентом другим базам данных с с открытым исходным кодом.
В базе данных создана одна табличка с такой структурой:
| column | type      | defaultValue  |
|--------|-----------|---------------|
| id     | int       | autoincrement |
| title  | char(255) | not null      |
| body   | text      | not null      |

Также привожу скриншот описания таблички в самой базе данных:

![Скриншот информации о табличке в базе данных](https://user-images.githubusercontent.com/77466385/104808382-7d3e4d00-57ee-11eb-9ab6-362044ff3620.png)

- Хостинг - heroku
В качестве хостинга для базы данных был выбран Heroku, так как он располагает достойным бесплатным функционалом, обеспечивающим работу базы данных с одноверменно до 20 подключенных пользователей и до 10 тысяч записей в базе. Также heroku обладает удобными инструментами и расширениями для командной строки чтобы быстро загружать обновления приложения на сервер, и отлавливать ошибки в приложении через систему логов.
- Back-end платформа - Node.js + Express
Я выбрала Node.js в качестве платформы, на которой выполняются запросы в базу данных, и возврат этих данных на клиентскую часть, так как клиентская часть приложения тоже написана на JavaScript, а части написанные на одном языке более легко поддерживаются. Также был использован фреймворк express для облегчения обработки запросов с клиентской части на серверную и возврата данных обратно.

### FRONTEND
В качестве платформы для разработки клиентской части был выбран JavaScript библиотека `React`.
Эта библиотека разработана компанией `Facebook` и позволяет легко и быстро разрабатывать приложения на JavaScript. 
Также `React` содержит множество устанавливаемых расширений, которые упрощают имплементацию тех или иных функциональных частей. Среди использованых расширений:
- `React-router` - для динамического изменения адресной строки браузера и вывода соответствующих данных.

Для базовой структуры было добавлено три страницы в клиентскую часть cms:
- `home` - домашняя страница
- `/articles` - страница для просмотра всех статей
- `/new-article` - стрраница для добавления новой статьи

При добавлении статьи она сохраняется в базу данных и при перезагрузке страницы по-прежнему будет отображаться в списке статей.
Также добавлена валидация на форму, чтобы невозможно было добавить статью без заголовка или без основного текста(Также валидация на не пустое значение присутствует на уровне базы данных).
