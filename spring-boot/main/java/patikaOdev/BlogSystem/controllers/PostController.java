package patikaOdev.BlogSystem.controllers;

import org.springframework.web.bind.annotation.*;
import patikaOdev.BlogSystem.dto.GetPostByIdDto;
import patikaOdev.BlogSystem.dto.requests.AddPostRequest;
import patikaOdev.BlogSystem.dto.requests.AddUserRequest;
import patikaOdev.BlogSystem.dto.requests.UpdatePostRequest;
import patikaOdev.BlogSystem.dto.responses.GetAllPostResponse;
import patikaOdev.BlogSystem.dto.responses.GetAllUserResponse;
import patikaOdev.BlogSystem.entities.Post;
import patikaOdev.BlogSystem.entities.User;
import patikaOdev.BlogSystem.service.PostService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/posts")
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("/getAll")
    public GetAllPostResponse getAll() {
        return postService.getAllPosts();
    }

    @GetMapping("/getById/{postId}")
    public GetPostByIdDto getById(@PathVariable Long postId) {
        return postService.getPostById(postId);
    }

    @PostMapping("/add")
    public Post createOnePost(@RequestBody AddPostRequest newPost) {
        return postService.saveOnePost(newPost);
    }

    @DeleteMapping("/delete/{postId}")
    public void deleteOnePost(@PathVariable Long postId) {
        this.postService.deleteOnePostById(postId);
    }
    @PutMapping("/update")
    public void updateOnePost( @RequestBody UpdatePostRequest updatePostRequest){
         postService.updateOnePost(updatePostRequest);

    }

}
