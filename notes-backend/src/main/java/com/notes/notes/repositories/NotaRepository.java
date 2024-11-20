
package com.notes.notes.repositories;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.notes.notes.models.NotaModel;

@Repository
public interface NotaRepository extends CrudRepository<NotaModel, Long> {

}
