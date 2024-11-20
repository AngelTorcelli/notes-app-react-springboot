
package com.notes.notes.repositories;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.notes.notes.models.EtiquetaModel;

@Repository
public interface EtiquetaRepository extends CrudRepository<EtiquetaModel, Long> {
     Optional<EtiquetaModel> findByNombre(String nombre);
}
