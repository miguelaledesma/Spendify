## How to run BE

`cd backend`

### export env variables

```
export PORT=5000
export MONGO_URL='not the real secret obviously'
export JWT_SECRET='not the real secret obviously'
```

### run backend command 
`npm install && npm run start`

### Running into issue with bcrypt
`npm rebuild bcrypt --build-from-source`

then run 

`npm run start`


## Running tests
`npm run test` 