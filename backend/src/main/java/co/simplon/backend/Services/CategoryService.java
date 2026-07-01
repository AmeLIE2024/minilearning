package co.simplon.backend.Services;

import co.simplon.backend.Entities.Category;
import co.simplon.backend.Repositories.CategoryRepository;

import java.util.List;

public class CategoryService {

    private CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {

        this.categoryRepository = categoryRepository;
    }

    public List<Category> findAllCategories() {
        return categoryRepository.findAll();
    }

    public void createCategory(Category category) {
        categoryRepository.save(category);
    }

}
