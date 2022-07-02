# react-spring-starter
Basic starting point for a web service: React on frontend with Spring Java on backend.

# Running

```sh
# Step 1. start the backend Spring server
./mvnw spring-boot:run

# Step 2. 

#  (Optional A) Install node via maven within the $PWD
    ./mvnw frontend:install-node-and-npm
#  (Option B) Use your npm to install
    npm install

# Step 3. Run webpack
./node/npm run watch # If you did Step 2 w/ Option A
npm run watch        # If you did Step 2 w/ Option B
```

# Testing

```
$ curl localhost:8080/api/pets
$ curl localhost:8080/api/pets/2
$ curl -X POST localhost:8080/api/pets -d "{\"name\": \"Clifford\", \"description\": \"Big red dog\"}" -H "Content-Type:application/json"
```

# Related

- [Spring Tutorial](https://spring.io/guides/tutorials/react-and-spring-data-rest/) this project is primarily based on.
- [JHipster](https://www.jhipster.tech/): A full-fledged batteries-included opinionated way to build Java+JS web services.

# TODO

```
[x] Basic REST CRUD Service
[ ] Basic unit tests
[x] Basic web page
[ ] CRUD web page
[x] Add React to client-side
[ ] Basic unit tests on JS as well
[ ] Make it not so terribly ugly

Maybe:

[ ] Dockerize?
[ ] Deploy!
[ ] Profit?!

TO DONT! Things to avoid to keep this simple:
[ ] Auth. Crucial to real-world but best avoided if not done properly.
[ ] A real Database. A real project would use Postgres, MongoDB, or Cassandra.
```