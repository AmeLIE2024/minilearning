package co.simplon.backend.Repository;

import co.simplon.backend.Entities.Category;
import co.simplon.backend.Entities.Resource;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ResourceRepository extends JpaRepository<Resource, UUID> {

    List<Resource> findAll();
    List<Resource> findAllByCategory(Category category);
    Optional<Resource> findById(UUID id);

}
