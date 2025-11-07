package br.com.aep.avante.Controller;

import br.com.aep.avante.Model.Usuario;
import br.com.aep.avante.Model.UsuarioDTO;
import br.com.aep.avante.Repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/api/usuario")
public class UsuarioApiController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping("/me")
    public ResponseEntity<UsuarioDTO> getUsuarioLogado(Principal principal) {
        if(principal == null){
            return ResponseEntity.status(401).build();
        }

        String email = principal.getName();

        Usuario usuario = usuarioRepository.findByEmail(email)
                .orElseThrow( () -> new UsernameNotFoundException("Usuário não encontrado."));

        UsuarioDTO dto = new UsuarioDTO(usuario.getNome(), usuario.getEmail());

        return ResponseEntity.ok(dto);
    }
}
