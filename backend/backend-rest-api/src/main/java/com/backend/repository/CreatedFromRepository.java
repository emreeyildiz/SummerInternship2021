package com.backend.repository;

import com.backend.entity.CreatedFrom;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface CreatedFromRepository extends MongoRepository<CreatedFrom, String> {

}
