package patikaOdev.BlogSystem.service;

import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import patikaOdev.BlogSystem.dataAccess.CategoryRepository;
import patikaOdev.BlogSystem.dto.GetAllCategoryDto;
import patikaOdev.BlogSystem.dto.GetAllCommentDto;
import patikaOdev.BlogSystem.dto.GetAllUsersDto;
import patikaOdev.BlogSystem.dto.requests.AddCategoryRequest;
import patikaOdev.BlogSystem.dto.requests.UpdateCategoryRequest;
import patikaOdev.BlogSystem.dto.responses.GetAllCategoryResponse;
import patikaOdev.BlogSystem.dto.responses.GetAllCommentResponse;
import patikaOdev.BlogSystem.entities.Category;
import patikaOdev.BlogSystem.entities.Comment;
import patikaOdev.BlogSystem.entities.Post;
import patikaOdev.BlogSystem.exception.BusinessException;
import patikaOdev.BlogSystem.mapper.ModelMapperService;

import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    private final ModelMapperService modelMapperService;

    public CategoryService(CategoryRepository categoryRepository, ModelMapperService modelMapperService) {
        this.categoryRepository = categoryRepository;
        this.modelMapperService = modelMapperService;
    }

    public GetAllCategoryResponse getAllCategories() {

        GetAllCategoryResponse response = new GetAllCategoryResponse();
        List<GetAllCategoryDto> dtos = categoryRepository.findAll()
                .stream()
                .filter(Objects::nonNull)
                .map(this::convertCategoryGetAllCategoryDto)
                .collect(Collectors.toList());


            response.setGetAllCategoryDto(dtos);
            response.setResultCode("1");
            response.setResultDescription("Success");

        return response;
    }

    public Category saveOneCategory(AddCategoryRequest newCategory) {
        Category category = modelMapperService.forRequest().map(newCategory, Category.class);
        category.setCreationDate(new Date());
        return categoryRepository.save(category);
    }

    public void deleteOneCategoryById(Long categoryId) {
        this.categoryRepository.deleteById(categoryId);
    }

    public void updateOneCategory(UpdateCategoryRequest updateCategoryRequest) {
        Category category = this.categoryRepository.findById(updateCategoryRequest.getCategoryId()).orElseThrow(() ->new BusinessException("Category can not found"));
        Category categoryToUpdate = this.modelMapperService.forRequest().map(updateCategoryRequest, Category.class);
        categoryToUpdate.setCreationDate(category.getCreationDate());
       this.categoryRepository.save(categoryToUpdate);
        }



    private GetAllCategoryDto convertCategoryGetAllCategoryDto(Category category) {
        GetAllCategoryDto getAllCategoryDto = new GetAllCategoryDto();
        getAllCategoryDto.setCategoryId(category.getCategoryId());
        getAllCategoryDto.setCategoryName(category.getCategoryName());
        getAllCategoryDto.setCreationDate(category.getCreationDate());

        return getAllCategoryDto;
    }

}