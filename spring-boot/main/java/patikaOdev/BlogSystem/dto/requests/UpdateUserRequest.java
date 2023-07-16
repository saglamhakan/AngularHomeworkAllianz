package patikaOdev.BlogSystem.dto.requests;

import lombok.Data;

@Data
public class UpdateUserRequest {
    private long userId;
    private String userName;
    private String email;
    private Boolean isActive;
}
