
командой gulp производится очистка папки build(если есть), 
создание папки build, 
сборка html,css,js файлов и выгрузка в build

(для сборки модулей js использован browserify) 

Отдельные таски:
gulp clean - очистка папки build
gulp html - копирование основного файла в build
gulp css - сборка css стилей в build
gulp js - сборка модулей js в build
gulp watch - отслеживание html,css,js изменений в исходниках
gulp webserver - поднятие dev-сервера browserSync

