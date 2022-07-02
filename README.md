# react-spring-starter
Basic starting point for a web service: React on frontend with Spring Java on backend.

# Running

```sh
# 1. start the backend Spring server
./mvnw spring-boot:run

# 2. (Optional) Install node to node/ within the $PWD
./mvnw frontend:install-node-and-npm

# 3. Run webpack (to compile JS) with watch
./node/npm run watch # If you did Step 2
npm run watch        # If you skipped Step 2 and have npm installed
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