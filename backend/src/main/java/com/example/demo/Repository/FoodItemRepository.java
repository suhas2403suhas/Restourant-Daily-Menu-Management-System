package com.example.demo.Repository;

import com.example.demo.Dto.FoodItemDto;
import com.example.demo.Entity.FoodItem;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FoodItemRepository extends JpaRepository<FoodItem,Long> {

    @Query(nativeQuery = true, value = "SELECT * FROM food_item")
    List<FoodItem> cqFindAllFood();

    @Modifying
    @Transactional
    @Query(nativeQuery = true,value = "insert into fullstack.food_item values(:id,:cate,0,:name,:price)")
    public void sqadd(Long id,String name,String cate,Long price);

    @Modifying
    @Transactional
    @Query(nativeQuery = true,value = "select * from fullstack.food_item where food_item.cate=:st")
    public List<FoodItem> sqFindCate(String st);

    @Modifying
    @Transactional
    @Query(nativeQuery = true,value = "update fullstack.food_item set name=:sname,cate=:scate,price=:sprice,freq=:freq where id=:sidde")
    public void sqUpdt(String sname,String scate,Long sprice,Long sidde,Long freq);


    @Modifying
    @Transactional
    @Query(nativeQuery = true,value = "update fullstack.food_item set freq=:fre where id=:sidde")
    public void sqUpdtWf(Long sidde,Long fre);

    @Modifying
    @Transactional
    @Query(nativeQuery = true,value = "delete from fullstack.food_item where food_item.id=:idd")
    public void sqDel(Long idd);

    @Query(nativeQuery = true,value = "select * from fullstack.food_item where id=:id")
    public FoodItem sqGetByIdUpd(Long id);

    @Modifying
    @Transactional
    @Query(nativeQuery = true,value = "update fullstack.food_item set freq=0")
    public void sqSetFreq();
}
