package patikaOdev.BlogSystem.controllers;

import org.springframework.web.bind.annotation.*;
import patikaOdev.BlogSystem.dto.requests.AddUserRequest;
import patikaOdev.BlogSystem.dto.requests.UpdateUserRequest;
import patikaOdev.BlogSystem.dto.responses.GetAllUserResponse;
import patikaOdev.BlogSystem.entities.User;
import patikaOdev.BlogSystem.service.UserService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/users")
public class UsersController {
    private final UserService userService;

    public UsersController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/getAll")
    public GetAllUserResponse getAll() {
        return userService.getAllUsers();
    }

    @PostMapping("/add")
    public User createOneUser(@RequestBody AddUserRequest newUser) {
        return userService.saveOneUser(newUser);
    }

    @DeleteMapping("/delete/{userId}")
    public void deleteOneUser(@PathVariable Long userId) {
        this.userService.deleteOneUserById(userId);
    }

    @PutMapping("/update")
    public void updateOneUser(@RequestBody UpdateUserRequest updateUserRequest){
         userService.updateOneUser(updateUserRequest);

    }


}
