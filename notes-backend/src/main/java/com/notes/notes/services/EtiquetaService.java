package com.notes.notes.services;


import java.util.ArrayList;
import java.util.Optional;

import com.notes.notes.models.EtiquetaModel;
import com.notes.notes.repositories.EtiquetaRepository;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class EtiquetaService {
    @Autowired
    private EtiquetaRepository etiquetaRepository;

    public ArrayList<EtiquetaModel> obtenerEtiquetas(){
        return (ArrayList<EtiquetaModel>) etiquetaRepository.findAll();
    }

    public EtiquetaModel agregarEtiqueta(EtiquetaModel etiqueta){
        return etiquetaRepository.save(etiqueta);
    }
}
