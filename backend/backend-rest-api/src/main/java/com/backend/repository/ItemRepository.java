package com.backend.repository;

import com.backend.entity.Item;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface ItemRepository extends MongoRepository<Item, String> {
    Item findTopByOrderByIdDesc();

}
