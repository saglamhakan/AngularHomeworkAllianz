package patikaOdev.BlogSystem.dto;

import lombok.Data;

import java.util.Date;

@Data
public class GetAllPostDto {

    private Long categoryId;

    private Long postId;
    private Long userId;

    private String title;
    private String content;
    private Long viewCount;
    private Date creationDate;
    private Boolean isPublished;
}
