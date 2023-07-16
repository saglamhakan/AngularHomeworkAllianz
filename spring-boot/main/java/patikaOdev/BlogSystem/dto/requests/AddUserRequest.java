package patikaOdev.BlogSystem.dto.requests;

import lombok.Data;

@Data
public class AddUserRequest {
    private String userName;
    private String email;
    private Boolean isActive;
}
