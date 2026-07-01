package co.simplon.backend.Repository;

import co.simplon.backend.Entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface CategoryRepository extends JpaRepository<Category, UUID> {
    List<Category> findAll();
    
}
