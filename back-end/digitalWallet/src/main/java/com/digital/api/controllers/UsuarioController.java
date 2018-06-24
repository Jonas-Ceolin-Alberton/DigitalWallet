package com.digital.api.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.digital.api.documents.Usuario;
import com.digital.api.services.UsuarioService;

@RestController
@RequestMapping(path = "/api/usuario")
public class UsuarioController {
	
	@Autowired
	private UsuarioService usuarioService;

	@GetMapping(path = "/{id}")
	public Optional<Usuario> listarPorID(@PathVariable(name = "id") String id) {
		return this.usuarioService.listarPorId(id);
	}
	
	@PostMapping
	public ResponseEntity<Usuario> cadastrar(@RequestBody Usuario usuario) {
		return ResponseEntity.ok(this.usuarioService.cadastrar(usuario));
	}
}
