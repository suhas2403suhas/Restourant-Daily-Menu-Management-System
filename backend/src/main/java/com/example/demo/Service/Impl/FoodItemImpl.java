package com.example.demo.Service.Impl;

import com.example.demo.Dto.FoodItemDto;
import com.example.demo.Entity.FoodItem;
import com.example.demo.Exception.ResourceOutOfBoundException;
import com.example.demo.Mapper.FoodItemMapper;
import com.example.demo.Repository.FoodItemRepository;
import com.example.demo.Service.FoodItemService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FoodItemImpl implements FoodItemService {
    FoodItemRepository foodItemRepository;

    public FoodItemImpl(FoodItemRepository foodItemRepository) {
        this.foodItemRepository = foodItemRepository;
    }

    @Override
    public FoodItemDto addFood(FoodItemDto foodItemDto) {
        FoodItem foodItem= FoodItemMapper.mapToFoodItem(foodItemDto);
        foodItemRepository.sqadd(foodItemDto.getId(),foodItem.getName(),foodItem.getCate(),foodItem.getPrice());
        return FoodItemMapper.mapToFoodItemDto(foodItem);
    }

    @Override
    public List<FoodItemDto> getFood() {
        List<FoodItem> foodItems=foodItemRepository.cqFindAllFood();
        return foodItems.stream().map((fi)->FoodItemMapper.mapToFoodItemDtoWf(fi)).collect(Collectors.toList());
    }

    @Override
    public List<FoodItemDto> getByCat(String st) {
        List<FoodItem> resFoodItem=foodItemRepository.sqFindCate(st);
        return resFoodItem.stream().map((fi)->FoodItemMapper.mapToFoodItemDtoWf(fi)).collect(Collectors.toList());
    }

    @Override
    public void updateFood(FoodItemDto foodItemDto,Long id) {
        foodItemRepository.sqUpdt(foodItemDto.getName(),foodItemDto.getCate(),foodItemDto.getPrice(),id,foodItemDto.getFreq());
    }

    @Override
    public void deleteFood(Long id) {
        //FoodItem foodItem=foodItemRepository.findById(id).orElseThrow(()->new ResourceOutOfBoundException("hello"));
        foodItemRepository.sqDel(id);
    }

    @Override
    public void updateFoodF(Long id, Long freq) {
        foodItemRepository.sqUpdtWf(id,freq);
    }

    @Override
    public FoodItem sqFoodById(Long id) {
        return foodItemRepository.sqGetByIdUpd(id);
    }

    @Override
    public void sqSetFreq() {
        foodItemRepository.sqSetFreq();
    }


}
