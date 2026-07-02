package co.simplon.backend.Services;

import co.simplon.backend.Entities.Category;
import co.simplon.backend.Repositories.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {

        this.categoryRepository = categoryRepository;
    }

    public List<Category> findAllCategories() {
        return categoryRepository.findAll();
    }

    public Category createCategory(Category category) {
        return this.categoryRepository.save(category);
    }

}
