require('dotenv/config');

module.exports = {
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "postgres",
  "database": "addresses",
  "entities": [
   /* "./dist/app/entities/*.js", */
      // "./**/app/entities/*" 
     /* "dist/app/entities/*.js" */  
      "src/app/entities/*.ts" 
  ],
  "migrations": [
   /*  "./dist/database/migrations/*.js", */
     //  "./**/app/entities/*" 
   /*  "dist/database/migrations/*.js" */
     "src/database/migrations/*.ts" 
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}