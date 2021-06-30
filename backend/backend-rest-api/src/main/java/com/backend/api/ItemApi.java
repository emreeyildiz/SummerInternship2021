package com.backend.api;

import java.util.List;

import com.backend.entity.Item;
import com.backend.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ItemApi {
    @Autowired
    private ItemRepository itemRepository;

    @PostConstruct
    public void init(){
    }
    @PostMapping("/item")
    public Item add(@RequestBody Item item){
        return itemRepository.save(item);
    }
    @GetMapping("/item")
        public List<Item> getAll(){

        return itemRepository.findAll();
    }
}
