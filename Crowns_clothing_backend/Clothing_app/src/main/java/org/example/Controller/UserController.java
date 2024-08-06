package org.example.Controller;
import org.example.Model.User;
import org.example.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@CrossOrigin
@RequestMapping("/user")
@RestController
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/registration")
    public User createUser(@RequestBody User user){
        User user1=userService.registerUser(user);
        return user1;
    }

    @PostMapping("/login")
    public String login(@RequestBody User user){
        String userName = user.getUserName();
        String userPassword = user.getPassword1();
        return userService.userLogin(userName, userPassword);
    }

}




