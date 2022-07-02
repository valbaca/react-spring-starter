package com.valbaca.starter.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {
    private final PetRepository petRepository;

    @Autowired
    public DatabaseLoader(PetRepository petRepository) {
        this.petRepository = petRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        petRepository.save(new Pet("Annie", "Quirky. Very loud howler. Loves laps."));
        petRepository.save(new Pet("Rogue", "Mean cat. Do not pet!"));
    }
}
