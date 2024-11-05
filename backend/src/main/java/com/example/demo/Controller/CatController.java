package com.example.demo.Controller;

import com.example.demo.Dto.CatDto;
import com.example.demo.Service.CatService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/Cat")
public class CatController {
    CatService catService;

    public CatController(CatService catService) {
        this.catService = catService;
    }

    @PostMapping
    public ResponseEntity<CatDto> addCat(@RequestBody CatDto catDto)
    {
        CatDto catDto1=catService.addCat(catDto);
        return new ResponseEntity<>(catDto1, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<CatDto>> getCat()
    {
        List<CatDto> cats=catService.getCat();
        return new ResponseEntity<>(cats,HttpStatus.CREATED);
    }
}
