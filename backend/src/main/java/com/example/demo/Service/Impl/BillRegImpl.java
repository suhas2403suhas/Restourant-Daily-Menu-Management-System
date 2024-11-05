package com.example.demo.Service.Impl;

import com.example.demo.Dto.BillRegDto;
import com.example.demo.Entity.BillReg;
import com.example.demo.Repository.BillRegRepository;
import com.example.demo.Service.BillRegService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BillRegImpl implements BillRegService {

    BillRegRepository billRegRepository;

    public BillRegImpl(BillRegRepository billRegRepository) {
        this.billRegRepository = billRegRepository;
    }

    @Override
    public BillReg addBills(BillRegDto billRegDto) {
        billRegRepository.sqAdd(billRegDto.getId(),billRegDto.getCust_id(),billRegDto.getFirstName(),billRegDto.getPayMode(),billRegDto.getTotCost(),billRegDto.getTotGst());
        return null;
    }

    @Override
    public List<BillReg> sqGetAll()
    {
        return billRegRepository.sqGetAll();
    }
}
