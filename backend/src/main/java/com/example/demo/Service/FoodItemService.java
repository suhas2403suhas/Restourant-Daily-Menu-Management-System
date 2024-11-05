package com.example.demo.Service;

import com.example.demo.Dto.FoodItemDto;
import com.example.demo.Entity.FoodItem;

import java.util.List;

public interface FoodItemService {
    FoodItemDto addFood(FoodItemDto foodItemDto);
    List<FoodItemDto> getFood();

    List<FoodItemDto> getByCat(String st);

    void updateFood(FoodItemDto foodItemDto,Long id);

    void deleteFood(Long id);

    void updateFoodF(Long id,Long freq);

    FoodItem sqFoodById(Long id);
    void sqSetFreq();
}
