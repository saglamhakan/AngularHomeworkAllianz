package patikaOdev.BlogSystem.dto;

import lombok.Data;

import java.util.Date;

@Data

public class GetAllCategoryDto {
    private Long categoryId;
    private String categoryName;
    private Date creationDate;
}
