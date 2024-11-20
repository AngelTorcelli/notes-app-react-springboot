package com.notes.notes.controllers;


import java.util.ArrayList;
import java.util.Map;
import java.util.Optional;

import com.notes.notes.models.NotaModel;
import com.notes.notes.services.NotaService;
import com.notes.notes.models.EtiquetaModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/nota")
//@CrossOrigin(origins = "http://localhost:5173") se utilizó archivo CorsConfig.java
public class NotaController {
    @Autowired
    NotaService notaService;

    @GetMapping()
    public ArrayList<NotaModel> obtenerNotas(){
        System.out.println("Entro a solicitar las notas");
        return notaService.obtenerNotas();
    }

    @PostMapping()
    public NotaModel agregarNota(@RequestBody NotaModel nota){
        return this.notaService.agregarNota(nota);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> eliminarNota(@PathVariable("id") Long id) {
        boolean ok = this.notaService.eliminarNota(id);
        if (ok) {
            return ResponseEntity.ok(
                Map.of(
                    "success", true,
                    "message", "Se eliminó la nota con id: " + id
                )
            );
        } else {
            return ResponseEntity.status(404).body(
                Map.of(
                    "success", false,
                    "message", "No se pudo eliminar la nota con id: " + id
                )
            );
        }
    }
}
