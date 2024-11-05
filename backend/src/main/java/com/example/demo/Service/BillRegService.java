package com.example.demo.Service;

import com.example.demo.Dto.BillRegDto;
import com.example.demo.Entity.BillReg;

import java.util.List;

public interface BillRegService {
    BillReg addBills(BillRegDto billRegDto);
    List<BillReg> sqGetAll();
}
