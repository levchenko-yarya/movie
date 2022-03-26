# movie

## information page of watched movies

## docker infa

`docker build -t 'yourname/repository' .` - build docker

`docker run -d -p 'port:port' 'yourname/repository'` - run docker

### documentation

GET `/movie` <- получить все фильмы

GET `/movie/:id` <- получить фильм по id

POST `/movie/post` <- добавить новый фильм

PUT `/movie/update/:id` <- изменить инфу фильма

DELETE `/movie/delete/:id` <- удалить фильм по id