package patikaOdev.BlogSystem.controllers;

import org.springframework.web.bind.annotation.*;
import patikaOdev.BlogSystem.dto.requests.AddCommentRequest;
import patikaOdev.BlogSystem.dto.requests.AddPostRequest;
import patikaOdev.BlogSystem.dto.requests.UpdateCommentRequest;
import patikaOdev.BlogSystem.dto.responses.GetAllCommentResponse;
import patikaOdev.BlogSystem.entities.Comment;
import patikaOdev.BlogSystem.service.CommentService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/comments")
public class CommentController {
    private final CommentService commentService;

    public CommentController(CommentService commentService){
        this.commentService=commentService;
    }
    @GetMapping("/getAll")
    public GetAllCommentResponse getAll() {
        return commentService.getAllComments();
    }

    @PostMapping("/add")
    public Comment createOnePost(@RequestBody AddCommentRequest newComment){
        return commentService.saveOneComment(newComment);
    }

    @DeleteMapping("/delete/{commentId}")
    public void deleteOneComment(@PathVariable Long commentId) {
        this.commentService.deleteOneCommentById(commentId);
    }
    @PutMapping("/update")
    public void updateOneUser( @RequestBody UpdateCommentRequest updateCommentRequest){
         commentService.updateOneComment(updateCommentRequest);

    }
}
