package com.notes.notes.controllers;


import java.util.ArrayList;
import java.util.Map;
import java.util.Optional;

import com.notes.notes.models.EtiquetaModel;
import com.notes.notes.services.EtiquetaService;
import com.notes.notes.models.EtiquetaModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/etiqueta")
public class EtiquetaController {
    @Autowired
    EtiquetaService etiquetaService;

    @GetMapping()
    public ArrayList<EtiquetaModel> obtenerEtiquetas(){
        System.out.println("Entro a solicitar las etiquetas");
        return etiquetaService.obtenerEtiquetas();
    }

    @PostMapping()
    public EtiquetaModel agregarEtiqueta(@RequestBody EtiquetaModel etiqueta){
        return this.etiquetaService.agregarEtiqueta(etiqueta);
    }

}
