# react-spring-starter
Basic starting point for a web service: React on frontend with Spring Java on backend.

# Running

```
./mvnw spring-boot:run
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
[ ] Unit tests
[ ] Basic web page
[ ] Add React to client-side
[ ] Unit tests on JS as well
[ ] Make it not terribly ugly

Maybe:
[ ] Postgres as Prod database
[ ] Dockerize?
[ ] Deploy!
[ ] Profit?!

TO DONT! Things to avoid to keep this simple:
[ ] Auth. Crucial to real-world but best avoided if not done properly.
```