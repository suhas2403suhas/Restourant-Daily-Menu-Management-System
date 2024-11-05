package com.example.demo.Mapper;

import com.example.demo.Dto.CatDto;
import com.example.demo.Entity.Cat;

public class CatMapper {
    public static Cat mapToCat(CatDto catDto)
    {
        return new Cat(
                catDto.getId(),
                catDto.getName()
        );
    }

    public static CatDto mapToCatDto(Cat cat)
    {
        return new CatDto(
                cat.getId(),
                cat.getName()
        );
    }
}
