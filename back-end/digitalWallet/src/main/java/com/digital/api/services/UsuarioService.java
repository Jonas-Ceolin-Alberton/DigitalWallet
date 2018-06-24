package com.digital.api.services;

import java.util.Optional;

import com.digital.api.documents.Usuario;

public interface UsuarioService {

	
	Usuario cadastrar(Usuario usuario);
	
	Optional<Usuario> listarPorId(String id);
	
}
