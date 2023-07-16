package patikaOdev.BlogSystem.dto;

import lombok.Data;

import java.util.Date;

@Data
public class GetAllUsersDto {

    private Long userId;
    private String userName;
    private String email;
    private Date creationDate;
    private Boolean isActive = true;
}
