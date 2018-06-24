package com.digital.api.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.digital.api.documents.Usuario;

public interface UsuarioRepository extends MongoRepository<Usuario, String>{

	
}
