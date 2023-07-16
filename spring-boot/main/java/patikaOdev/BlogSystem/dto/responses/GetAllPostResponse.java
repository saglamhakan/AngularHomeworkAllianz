package patikaOdev.BlogSystem.dto.responses;

import lombok.Data;
import patikaOdev.BlogSystem.dto.GetAllPostDto;

import java.util.List;

@Data
public class GetAllPostResponse extends BaseResponse {
    List<GetAllPostDto> getAllPostDto;

}
