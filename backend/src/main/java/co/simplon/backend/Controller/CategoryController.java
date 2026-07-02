package co.simplon.backend.Controller;


import co.simplon.backend.Entities.Category;
import co.simplon.backend.Services.CategoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/categories")
public class CategoryController {

    private CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;


    }
    @GetMapping
    public List<Category> getAllCategories() {
        return categoryService.findAllCategories();

    }
    @PostMapping
    public Category createCategory(@RequestBody Category category) {
      return this.categoryService.createCategory(category);
    }
}
