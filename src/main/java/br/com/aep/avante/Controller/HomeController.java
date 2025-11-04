package br.com.aep.avante.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping("/")
    public String home() {
        return "forward:index.html";
    }

    @GetMapping("/home")
    public String homePage(){
        return "forward:home.html";
    }

    @GetMapping("/login")
    public String loginPage(){
        return "forward:login.html";
    }

    @GetMapping("/cadastro")
    public String cadastroPage(){
        return "forward:cadastro.html";
    }

    @GetMapping("/profile")
    public String profilePage(){
        return "forward:profile.html";
    }
}