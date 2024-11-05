package com.example.demo.Repository;


import com.example.demo.Entity.StaffLogin;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface StaffLoginRepository extends JpaRepository<StaffLogin,Long> {


    @Modifying
    @Transactional
    @Query(nativeQuery = true,value="insert into fullstack.hello values(:id,:first_name,:last_name,:staff_id)")
    public void sqadd(Long id,Long staff_id,String first_name,String last_name);


    @Query(nativeQuery = true,value="select * from fullstack.hello where id=(select max(id) from fullstack.hello)")
    public StaffLogin sqget();
}
