package patikaOdev.BlogSystem.dataAccess;

import org.springframework.data.jpa.repository.JpaRepository;
import patikaOdev.BlogSystem.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
