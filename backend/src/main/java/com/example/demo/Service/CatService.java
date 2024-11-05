package com.example.demo.Service;

import com.example.demo.Dto.CatDto;
import org.springframework.stereotype.Service;

import java.util.List;


public interface CatService {
    CatDto addCat(CatDto catDto);

    List<CatDto> getCat();

}
