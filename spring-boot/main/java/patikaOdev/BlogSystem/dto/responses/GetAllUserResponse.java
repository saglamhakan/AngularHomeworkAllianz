package patikaOdev.BlogSystem.dto.responses;

import lombok.Data;
import patikaOdev.BlogSystem.dto.GetAllUsersDto;

import java.util.List;

@Data
public class GetAllUserResponse extends BaseResponse {
    List<GetAllUsersDto> getAllUsersDto;
}
