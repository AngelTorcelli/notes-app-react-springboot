package com.notes.notes.models;


import jakarta.persistence.*;

@Entity
@Table(name = "nota")
public class NotaModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long idnota;
    
    private String titulo;
    private String contenido;
    private boolean archivado;
    private boolean destacado;    
    @ManyToOne
    @JoinColumn(name = "etiqueta", referencedColumnName = "idetiqueta", nullable = true)
    private EtiquetaModel etiqueta;


    public Long getIdnota() {
        return idnota;
    }

    public void setIdnota(Long idnota) {
        this.idnota = idnota;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getContenido() {
        return contenido;
    }

    public void setContenido(String contenido) {
        this.contenido = contenido;
    }

    public boolean isArchivado() {
        return archivado;
    }

    public void setArchivado(boolean archivado) {
        this.archivado = archivado;
    }

    public boolean isDestacado() {
        return destacado;
    }

    public void setDestacado(boolean destacado) {
        this.destacado = destacado;
    }

    public EtiquetaModel getEtiqueta() {
        return etiqueta;
    }

    public void setEtiqueta(EtiquetaModel etiqueta) {
        this.etiqueta = etiqueta;
    }

    
    
}
