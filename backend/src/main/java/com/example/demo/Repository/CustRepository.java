package com.example.demo.Repository;

import com.example.demo.Entity.Cust;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface CustRepository extends JpaRepository<Cust,Long> {

    @Transactional
    @Modifying
    @Query(nativeQuery = true,value = "insert into fullstack.cust values(:id,:email,:firstName,:lastName,:phoneNo)")
    public void sqadd(Long id,String firstName,String lastName,String email,String phoneNo);


    @Query(nativeQuery = true,value = "select * from fullstack.cust where id=(select max(id) from fullstack.cust)")
    public Cust sqGetLast();
}
