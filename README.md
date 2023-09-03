## SuperCRM test task:

### Задача:
Реализовать модуль аутентификации пользователя для веб-сайта.
Модуль должен предоставлять REST API для прохождения аутентификации и получения данных по пользователю прошедшему аутентификацию.
Для хранения данных используется Postgresql. При реализации необходимо использовать Nest.js и TypeORM.

## Установка

```bash
$ yarn install
```
Перед запуском сервера необходимо запустить Postgres, для этого создан специальный скрипт:
```bash
$ ./scripts/start-db.sh
```

Теперь можно запускать API сервер

## Запуск

```bash
# development
$ npm run start:dev
```
После запуска сервер будет доступен по адресу: http://localhost:3000
```
http://localhost:3000/users/register
http://localhost:3000/users/login
```
## Тесты

```bash
npm run test
npm run test:e2e
```
