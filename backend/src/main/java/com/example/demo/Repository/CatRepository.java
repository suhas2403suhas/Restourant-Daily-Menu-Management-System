package com.example.demo.Repository;

import com.example.demo.Entity.Cat;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CatRepository extends JpaRepository<Cat,Long> {

    @Modifying
    @Transactional
    @Query(nativeQuery = true, value = "insert into fullstack.cat values(:id,:name)")
    public void sqadd(Long id,String name);


    @Query(nativeQuery = true,value = "select * from fullstack.cat")
    public List<Cat> sqAll();


}
