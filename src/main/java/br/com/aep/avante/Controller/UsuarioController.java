package br.com.aep.avante.Controller;

import br.com.aep.avante.Model.Usuario;
import br.com.aep.avante.Service.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/cadastro")
    public String cadastrarUsuario(
            @Valid @ModelAttribute Usuario usuario,
            BindingResult result,
            @RequestParam("confirmacaoSenha") String confirmacaoSenha,
            RedirectAttributes redirectAttributes) {

        if(!usuario.getSenha().equals(usuario.getSenha())){
            result.addError(new FieldError("usuario","senha","As senhas não conferem."));
        }

        if (result.hasErrors()) {
            return "forward:cadastro.html";
        }

        try {
            usuarioService.salvarUsuario(usuario);
            return "redirect:/login";

        } catch (Exception e) {
            redirectAttributes.addFlashAttribute("erro", "Não foi possível realizar o cadastro. Verifique se o e-mail já está em uso.");
            return "redirect:/cadastro";
        }
    }
}
