package com.example.demo.Controller;

import com.example.demo.Dto.FoodItemDto;
import com.example.demo.Entity.FoodItem;
import com.example.demo.Service.FoodItemService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/FoodItem")
public class FoodItemController {
    FoodItemService foodItemService;

    public FoodItemController(FoodItemService foodItemService) {
        this.foodItemService = foodItemService;
    }

    @PostMapping
    public ResponseEntity<FoodItemDto> addFood(@RequestBody FoodItemDto foodItemDto)
    {
        FoodItemDto foodItemDto1=foodItemService.addFood(foodItemDto);
        return new ResponseEntity<>(foodItemDto1, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<FoodItemDto>> getFood()
    {
        List<FoodItemDto> foodItems=foodItemService.getFood();
        return new ResponseEntity<>(foodItems,HttpStatus.CREATED);
    }

    @GetMapping("{st}")
    public ResponseEntity<List<FoodItemDto>> getByCat(@PathVariable("st") String st)
    {
        List<FoodItemDto> foodItems=foodItemService.getByCat(st);
        return new ResponseEntity<>(foodItems,HttpStatus.CREATED);
    }
    @PutMapping("{id}")
    public ResponseEntity<FoodItemDto> updateFood(@RequestBody FoodItemDto foodItemDto,@PathVariable("id") Long id)
    {
        foodItemService.updateFood(foodItemDto,id);
        return new ResponseEntity<>(foodItemDto,HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public void deleteFood(@PathVariable("id") Long id)
    {
        foodItemService.deleteFood(id);
    }

    @PutMapping("/freq/"+"{id}")
    public void updateFoodF(@PathVariable("id") Long id,@RequestBody Long freq)
    {
        foodItemService.updateFoodF(id,freq);
    }

    @GetMapping("/id/"+"{id}")
    public ResponseEntity<FoodItem> getFoodByIdUpd(@PathVariable("id") Long id)
    {
        return new ResponseEntity<>(foodItemService.sqFoodById(id),HttpStatus.CREATED);
    }

    @PostMapping("/freq")
    public void sqSetFreq()
    {
        foodItemService.sqSetFreq();
    }

 }
