package com.backend.api;

import com.backend.entity.CreatedFrom;
import com.backend.repository.CreatedFromRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class CreatedFromApi {
    @Autowired
    private CreatedFromRepository createdFromRepository;

    @PostConstruct
    public void init(){

    }
    @PostMapping("/createdFrom")
    public CreatedFrom add(@RequestBody CreatedFrom item){
        return createdFromRepository.save(item);
    }
    @GetMapping("/createdFrom")
        public List<CreatedFrom> getAll(){

        return createdFromRepository.findAll();
    }

}
