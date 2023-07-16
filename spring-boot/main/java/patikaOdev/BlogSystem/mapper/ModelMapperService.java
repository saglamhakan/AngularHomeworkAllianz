package patikaOdev.BlogSystem.mapper;

import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;


public interface ModelMapperService {

    ModelMapper forResponse();

    ModelMapper forRequest();
}
