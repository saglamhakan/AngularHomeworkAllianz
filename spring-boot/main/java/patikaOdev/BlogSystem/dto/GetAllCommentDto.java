package patikaOdev.BlogSystem.dto;

import lombok.Data;

import java.util.Date;

@Data
public class GetAllCommentDto {
    private Long commentId;

    private Long userId;
    private Long postId;
    private String comment;
    private Date creationDate;
    private Boolean isConfirmed;
}
