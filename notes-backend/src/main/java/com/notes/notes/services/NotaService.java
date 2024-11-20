package com.notes.notes.services;

import java.util.ArrayList;
import java.util.Optional;

import com.notes.notes.models.EtiquetaModel;
import com.notes.notes.models.NotaModel;
import com.notes.notes.repositories.EtiquetaRepository;
import com.notes.notes.repositories.NotaRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
@Service
public class NotaService {
    @Autowired
    private NotaRepository notaRepository;
    @Autowired
    private EtiquetaRepository etiquetaRepository;

    public ArrayList<NotaModel> obtenerNotas(){
        return (ArrayList<NotaModel>) notaRepository.findAll();
    }

    public NotaModel agregarNota(NotaModel nota) {
        if (nota.getEtiqueta() != null) {
            String nombreEtiqueta = nota.getEtiqueta().getNombre();
            Optional<EtiquetaModel> etiquetaExistente = etiquetaRepository.findByNombre(nombreEtiqueta);
    
            if (etiquetaExistente.isEmpty()) {                
                EtiquetaModel nuevaEtiqueta = new EtiquetaModel();
                nuevaEtiqueta.setNombre(nombreEtiqueta);
                etiquetaRepository.save(nuevaEtiqueta);
                nota.setEtiqueta(nuevaEtiqueta);
            } else {                
                nota.setEtiqueta(etiquetaExistente.get());
            }
        }
    
        return notaRepository.save(nota);
    }

    public boolean eliminarNota(Long id){
        try {
            notaRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            System.out.println(e);
            return false;
        }
    }
}
