package com.valbaca.starter.model;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;

class DatabaseLoaderTest {

    @InjectMocks
    DatabaseLoader databaseLoader;

    @Mock
    private PetRepository mockPetRepo;


    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        databaseLoader = new DatabaseLoader(mockPetRepo);
    }

    @Test
    void run() throws Exception {
        databaseLoader.run();
        Mockito.verify(mockPetRepo, Mockito.times(2)).save(any(Pet.class));
    }
}