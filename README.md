# Test task for MetaPrime

## Первое задание
```
Написать код, который при клике на ссылку на странице открывает в новом окне ссылку, 
а в текущем окне – заранее указанный в коде URL. 
В теге ссылки не должно быть атрибута "target". 

Также, при клике на ссылку в cookie и localStorage пишется количество кликов по странице. 
Использовать только JS, без фреймворков и библиотек. 

Код должен работать в браузерах Chrome и Firefox. 
```
Выполненное задание в папке `/1task` данного репозитория

## Второе задание
```
Водительские категории хранятся в переменной 'driverCat' в формате - '12211', где 2 означает наличие категории, 1 ее отсутствие. 

Задача - отработать получение, отображение в списке (в данном случае должно отображаться 'B, C'), возможность изменения и сохранение в том же формате. 

Важное условие: Постарайтесь максимальнно использовать логику Vue и 
обойтись без эвентов типа @input, @change, @click и т.д. 
```
Ссылка на выполненное [задание](https://codepen.io/dubovskiyim/pen/ZEOEPZp)

## Третье и четвертое задание
```
3. В приложенном архиве ' mp_test.zip' чистый Vue-CLI, сейчас router и store - отдельные файлы (router.js и store.js). 

Задача перенести конфигурацию из отдельных файлов в папки router и store. 

Функционал router.js переместите в index.js папки router. Сделайте компонент ‘about’ динамическим. 
Компонент  ‘about’ должен откликаться на любой адрес вида http://localhost:8080/#/*** 
(http://localhost:8080/#/about1 или http://localhost:8080/#/ab и т.д.).

В store создайте два модуля: driver и logic. 

4. Подключите Vuetify к Vue-CLI сборке из 3 задания. 
Положите переменную driverCat из 2 задания в модуль driver, а <v-select></v-select> в любой компонент. 
Создайте все необходимые связи для рабочего приложения. 
Используйте action и mutation из модуля logic, для изменения driverCat в store. 

```
Выполнено задание в виде проекта.

Установить зависимости `npm install` или `yarn install`

Запустить проект `npm run serve` или `yarn serve`
