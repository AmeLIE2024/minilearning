package co.simplon.backend.Repositories;

import co.simplon.backend.Entities.Category;
import co.simplon.backend.Entities.Resource;
import co.simplon.backend.Enums.Status;
import co.simplon.backend.Enums.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ResourceRepository extends JpaRepository<Resource, UUID> {
    List<Resource> findAllByCategory(Category category);
    List<Resource> findAllByType(Type type);
    List<Resource> findAllByStatus(Status status);


}
