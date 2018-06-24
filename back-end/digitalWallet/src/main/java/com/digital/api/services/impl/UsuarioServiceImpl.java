package com.digital.api.services.impl;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.digital.api.documents.Usuario;
import com.digital.api.repositories.UsuarioRepository;
import com.digital.api.services.UsuarioService;

@Service
public class UsuarioServiceImpl implements UsuarioService {
	
	@Autowired
	private UsuarioRepository usuarioRepository;

	@Override
	public Usuario cadastrar(Usuario usuario) {
		return this.usuarioRepository.save(usuario);
	}

	@Override
	public Optional<Usuario> listarPorId(String id) {
		return this.usuarioRepository.findById(id);
	}



}
