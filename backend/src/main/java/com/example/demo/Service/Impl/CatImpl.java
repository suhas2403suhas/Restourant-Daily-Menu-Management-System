package com.example.demo.Service.Impl;

import com.example.demo.Dto.CatDto;
import com.example.demo.Entity.Cat;
import com.example.demo.Mapper.CatMapper;
import com.example.demo.Repository.CatRepository;
import com.example.demo.Service.CatService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CatImpl implements CatService {
    CatRepository catRepository;

    public CatImpl(CatRepository catRepository) {
        this.catRepository = catRepository;
    }

    @Override
    public CatDto addCat(CatDto catDto) {
        Cat cat= CatMapper.mapToCat(catDto);
        catRepository.sqadd(cat.getId(),cat.getName());
        return CatMapper.mapToCatDto(cat);
    }

    @Override
    public List<CatDto> getCat() {
        List<Cat> cats=catRepository.sqAll();
        return cats.stream().map((cat)->CatMapper.mapToCatDto(cat)).collect(Collectors.toList());
    }


}
