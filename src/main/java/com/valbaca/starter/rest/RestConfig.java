package com.valbaca.starter.rest;

import com.valbaca.starter.model.Pet;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Component
public class RestConfig implements RepositoryRestConfigurer {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        // This config is needed to expose the `id` field for Pets. Spring hides it by default
        // https://stackoverflow.com/a/66408201/158886
        config.exposeIdsFor(Pet.class);
    }
}
