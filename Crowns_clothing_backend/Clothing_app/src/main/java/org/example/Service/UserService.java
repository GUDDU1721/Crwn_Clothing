package org.example.Service;
import org.example.Model.User;
import org.example.Repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private UserRepository userRepo;

    public UserService(UserRepository userRepo) {
        this.userRepo = userRepo;

    }

    public User registerUser(User user) {
        return userRepo.save(user);
    }

    public String userLogin(String username,String password){
        boolean foundUsers = existByEmail(username);
        if(foundUsers) {
            User userObj = userRepo.getUserByUserName(username);
            if(userObj.getPassword1().equals(password) || userObj.getPassword2().equals(password)){

                return "{" +
                        "\"message\":"+"Successfully logged in\",\n"+
                        "\"data\":"+userObj+",\n"+
                        "\"Email: "+ userObj.getEmail()+"\n"+
                        "\""+
                        "}";
            }
        }

        return "{" +
                "\"message\":"+"Authentication failed\",\n"+
                "}";
    }
    public Boolean existByEmail(String email){
        Optional<User> usersObj = Optional.ofNullable(userRepo.getUserByUserName(email));
        //List<User> usersObj= userRepoObj.getUserByUsername(email);
        if(!usersObj.isEmpty()){
            return true;
        }
        return false;
    }







}

