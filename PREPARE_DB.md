# Preparing the Database

``` shell 

create database shopdb;
create user shopper identified by 'shoppass';
use shopdb;
grant privileges on shopdb to shopper;
grant privileges on shopdb.* to shopper;
```
``` npm i sequelize
npm i mysql2
```