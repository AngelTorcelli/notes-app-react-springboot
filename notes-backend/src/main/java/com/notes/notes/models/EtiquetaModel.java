package com.notes.notes.models;

import jakarta.persistence.*;

@Entity
@Table(name = "etiqueta")
public class EtiquetaModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false )
    private Long idetiqueta;
    private String nombre;

    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public Long getIdetiqueta() {
        return idetiqueta;
    }
    public void setIdetiqueta(Long idetiqueta) {
        this.idetiqueta = idetiqueta;
    }
     
}
