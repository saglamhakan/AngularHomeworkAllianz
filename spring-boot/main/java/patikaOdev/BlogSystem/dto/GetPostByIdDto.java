package patikaOdev.BlogSystem.dto;


import lombok.Data;

@Data
public class GetPostByIdDto {

    private Long userId;

    private Long categoryId;
    private String title;
    private String content;
    private Long viewCount;
    private Boolean isPublished;
}
