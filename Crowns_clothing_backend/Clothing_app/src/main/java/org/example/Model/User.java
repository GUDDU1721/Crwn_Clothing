package org.example.Model;


import jakarta.persistence.*;
import lombok.Data;

@Entity

@Data

@Table(name = "ecommerce_user")
public class User {
    @Column(name = "user_id")
    @GeneratedValue
    @Id
    private int Id;
    @Column(name = "user_name")
    private String userName;
    @Column(name = "user_email")
    private String email;
    @Column(name = "password1")
    private String password1;
    @Column(name = "password2")
    private String password2;

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword1() {
        return password1;
    }

    public void setPassword1(String password1) {
        this.password1 = password1;
    }

    public String getPassword2() {
        return password2;
    }

    public void setPassword2(String password2) {
        this.password2 = password2;
    }


}