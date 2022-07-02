package com.valbaca.starter.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@EqualsAndHashCode
@ToString
@NoArgsConstructor
public class Pet {
    private @Id @GeneratedValue Long id;
    private String name;
    private String description;

    public Pet(String name, String description) {
        this.name = name;
        this.description = description;
    }
}
