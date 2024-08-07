## Blogging system(Nodejs)
### [Setting up project and development env](https://www.youtube.com/watch?v=38L3E-Zrswo&list=PLG3j59vX4yLHA-wCw7KDP-i0r10ZrckqG&index=2&ab_channel=coderawesome)

- npm init
- npm install --save express

- create server(app.js)

- sudo npm install -g nodemon [but package.json not record] or
- npm install nodemon -D
- nodemon app.js

- DB ORM (Sequelize)
- sequelize create this folder (config, migrations, models, seeders)
- npm i sequelize sequelize-cli
- npx sequelize init

- create model Post(id, title, content, image_url, categoryId, usersId)
- npx sequelize model:generate --name Post --attributes title:string,content:text,imageUrl:string,categoryId:integer,userId:integer
- npx sequelize db:migrate

- npm install --save mysql2

### [Routes and Controllers](https://www.youtube.com/watch?v=pRV6pe2bnbQ&list=PLG3j59vX4yLHA-wCw7KDP-i0r10ZrckqG&index=3&ab_channel=coderawesome)

- controllers(post.controller.js), routers(posts.js)

### [Models, migrations, connect db](https://www.youtube.com/watch?v=F1RwUI3p4bI&list=PLG3j59vX4yLHA-wCw7KDP-i0r10ZrckqG&index=4&ab_channel=coderawesome)

- follow the Sequelize section (line 13-20)
- db connect to config/config.json
