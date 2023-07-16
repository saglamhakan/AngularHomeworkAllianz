package patikaOdev.BlogSystem.dto.responses;

import lombok.Data;
import patikaOdev.BlogSystem.dto.GetAllCategoryDto;
import java.util.List;

@Data
public class GetAllCategoryResponse extends BaseResponse {
    List<GetAllCategoryDto> getAllCategoryDto;

}
