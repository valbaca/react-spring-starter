# react-spring-starter
Basic starting point for a web service: React on frontend with Spring Java on backend.

Built on:
- Java 11 (until I upgrade my IntelliJ Ultimate beyond 2018.2)
- Spring Boot
- H2 in-memory DB
- React 18

# Running

```sh
# Step 1. Compile Java and start the backend Spring server and Database
./mvnw install spring-boot:run

# Step 2. "Compile" JavaScript
npm install or ./mvnw frontend:install-node-and-npm

# Step 3. Start webpack 
npm run watch or ./node/npm run watch
```

# Testing

```
$ curl localhost:8080/api/pets
$ curl localhost:8080/api/pets/2
$ curl -X POST localhost:8080/api/pets -d "{\"name\": \"Clifford\", \"description\": \"Big red dog\"}" -H "Content-Type:application/json"
```

# Related

- [Spring Tutorial](https://spring.io/guides/tutorials/react-and-spring-data-rest/) this project is primarily based on this tutorial.
    - [Github](https://github.com/spring-guides/tut-react-and-spring-data-rest)
- [Okta Tutorial ](https://developer.okta.com/blog/2022/06/17/simple-crud-react-and-spring-boot) this project also pulled heavily from this tutorial.
    - [Github]()
- [eirslett/frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin) A plugin that blends NPM into Maven.
- [JHipster](https://www.jhipster.tech/): A full-fledged, batteries-included, opinionated way to build Java+JS web services.

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