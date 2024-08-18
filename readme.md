## Blogging system(Nodejs)
### [Setting up project and development env](https://www.youtube.com/watch?v=38L3E-Zrswo&list=PLG3j59vX4yLHA-wCw7KDP-i0r10ZrckqG&index=2&ab_channel=coderawesome)

- npm init
- npm install --save express

- create server(app.js)

- sudo npm install -g nodemon [but package.json not record] or
- npm install nodemon -D
- nodemon app.js
- package.json set bellow code then run [npm start]

```
    "scripts": {
        "start": "nodemon app.js"
    },
```

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

### [Inserting data to database](https://www.youtube.com/watch?v=rrwgTT2wVqw&list=PLG3j59vX4yLHA-wCw7KDP-i0r10ZrckqG&index=5&ab_channel=coderawesome)

- npm install --save body-parser
- postman: method(post) => localhost:3000/posts

### [Implement CRUD](https://www.youtube.com/watch?v=fp-ZaIFCqPU&list=PLG3j59vX4yLHA-wCw7KDP-i0r10ZrckqG&index=6&ab_channel=coderawesome)

- router.post('/', postController.save);
- router.get('/', postController.index);
- router.get('/:id', postController.show);
- router.patch('/:id', postController.update);
- router.delete('/:id', postController.destroy);

### [Validate data in NodeJS](https://www.youtube.com/watch?v=XYQuGArOS3s&list=PLG3j59vX4yLHA-wCw7KDP-i0r10ZrckqG&index=7)

- npm i fastest-validator
- see (post.controller.js) page for validation code

### [Authentication in NodeJS](https://www.youtube.com/watch?v=OfC8BrlEdtA&list=PLG3j59vX4yLHA-wCw7KDP-i0r10ZrckqG&index=8)

- npm install --save bcryptjs
- npm install --save jsonwebtoken
- see (user.controller.js) page for authentication code

### [Protect Routes with Middleware in NodeJS](https://www.youtube.com/watch?v=9EyuLacWT0o&list=PLG3j59vX4yLHA-wCw7KDP-i0r10ZrckqG&index=9)

- see middleware/check-auth.js page
- update token from env [nodemon.json] [user controller, check-auth]
- Collect bearer token from login api and send authorization / bearer token [add, update, delete api]

### [Implement Image Uploader in NodeJS](https://www.youtube.com/watch?v=aqgGGfARwYw&list=PLG3j59vX4yLHA-wCw7KDP-i0r10ZrckqG&index=10)

- npm i --save multer
- see code from (helpers/image-uploader.js, controller/image.controller.js, routers/images.js, app.js)

### [Run Seeders with NodeJS from Sequelize](https://www.youtube.com/watch?v=OPqRXKLLM1I&list=PLG3j59vX4yLHA-wCw7KDP-i0r10ZrckqG&index=11)

- npx sequelize seed:generate --name category-seeder
- [see seeders folder code or click link](https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-seed)
- **Running Seeds**
- npx sequelize db:seed --seed 20240815040504-category-seeder
- npx sequelize db:seed:all

- **Undoing Seeds**
- npx sequelize db:seed:undo
- npx sequelize db:seed:undo --seed name-of-seed-as-in-data
- npx sequelize db:seed:undo:all

### [Faker install](https://fakerjs.dev/guide/)
- npm install @faker-js/faker --save-dev
- import { faker } from '@faker-js/faker';
- const randomName = faker.person.fullName(); // Rowan Nikolaus
- const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

```
Location folder: seeders/seed file[category-seeder.js]
------------------------
const { faker } = require('@faker-js/faker');

const users = [...Array(20)].map((user) => (
    {
        name: faker.person.firstName(),
        createdAt: new Date(),
        updatedAt: new Date()
    }
))

module.exports = {
    async up (queryInterface, Sequelize) {    
        await queryInterface.bulkInsert('Categories', users, {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Categories', null, {});
    }
};
```

#### Old way seeders
```
Location folder: seeders/seed file[category-seeder.js]
module.exports = {
    async up (queryInterface, Sequelize) {    
        await queryInterface.bulkInsert('Categories', [
            {
                name: 'John Doe',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'John Doe2',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Categories', null, {});
    }
};
```

### [Sequelize Associations (hasOne, hasMany, belongsTo, belongsToMany)](https://www.youtube.com/watch?v=sN6Bv1EWI3w&list=PLG3j59vX4yLHA-wCw7KDP-i0r10ZrckqG&index=12)
