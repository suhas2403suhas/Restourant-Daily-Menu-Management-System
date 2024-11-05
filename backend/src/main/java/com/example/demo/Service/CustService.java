package com.example.demo.Service;

import com.example.demo.Dto.CustDto;
import com.example.demo.Entity.Cust;

public interface CustService {
    void addCust(CustDto custDto);
    Cust getLast();
}
