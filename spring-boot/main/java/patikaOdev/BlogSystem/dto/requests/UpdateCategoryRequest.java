package patikaOdev.BlogSystem.dto.requests;

import lombok.Data;

@Data
public class UpdateCategoryRequest {

    private Long categoryId;
    private String categoryName;

}
