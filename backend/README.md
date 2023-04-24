## How to run BE

`cd backend`

### export env variables

```
export PORT=5000
export MONGO_URL='mongodb+srv://miguelledesma33:gr842hJUb-jULQ5@cluster0.mung5j6.mongodb.net/?retryWrites=true&w=majority'
export JWT_SECRET=asecret
```

### run backend command 
`npm install && npm run start`

### Running into issue with bcrypt
`npm rebuild bcrypt --build-from-source`

then run 

`npm run start`


## Running tests
`npm run test` 