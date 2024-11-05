package com.example.demo.Mapper;

import com.example.demo.Dto.FoodItemDto;
import com.example.demo.Entity.FoodItem;

public class FoodItemMapper {

    public static FoodItem mapToFoodItem(FoodItemDto foodItemDto)
    {
        return new FoodItem(
                foodItemDto.getId(),
                foodItemDto.getName(),
                foodItemDto.getCate(),
                foodItemDto.getPrice(),0L
        );
    }

    public static FoodItemDto mapToFoodItemDto(FoodItem foodItem)
    {
        return new FoodItemDto(
                foodItem.getId(),
                foodItem.getName(),
                foodItem.getCate(),
                foodItem.getPrice(),0L
        );
    }
    public static FoodItem mapToFoodItemWf(FoodItemDto foodItemDto)
    {
        return new FoodItem(
                foodItemDto.getId(),
                foodItemDto.getName(),
                foodItemDto.getCate(),
                foodItemDto.getPrice(),
                foodItemDto.getFreq()
        );
    }

    public static FoodItemDto mapToFoodItemDtoWf(FoodItem foodItem)
    {
        return new FoodItemDto(
                foodItem.getId(),
                foodItem.getName(),
                foodItem.getCate(),
                foodItem.getPrice(),
                foodItem.getFreq()
        );
    }
}
