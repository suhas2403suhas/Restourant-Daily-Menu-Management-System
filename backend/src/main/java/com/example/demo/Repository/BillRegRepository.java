package com.example.demo.Repository;

import com.example.demo.Entity.BillReg;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BillRegRepository extends JpaRepository<BillReg,Long> {

    @Transactional
    @Modifying
    @Query(nativeQuery = true,value = "insert into fullstack.bill_reg values(:id,:cust_id,:first_name,:pay_mode,:tot_cost,:tot_gst)")
    void sqAdd(Long id,Long cust_id,String first_name,String pay_mode,Long tot_cost,double tot_gst);

    @Query(nativeQuery = true,value = "select * from fullstack.bill_reg")
    List<BillReg> sqGetAll();
}
