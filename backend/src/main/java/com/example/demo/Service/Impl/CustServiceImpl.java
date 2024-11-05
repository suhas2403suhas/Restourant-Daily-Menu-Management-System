package com.example.demo.Service.Impl;

import com.example.demo.Dto.CustDto;
import com.example.demo.Entity.Cust;
import com.example.demo.Mapper.CustMapper;
import com.example.demo.Repository.CustRepository;
import com.example.demo.Service.CustService;
import org.springframework.stereotype.Service;

@Service
public class CustServiceImpl implements CustService {

    CustRepository custRepository;

    public CustServiceImpl(CustRepository custRepository) {
        this.custRepository = custRepository;
    }

    @Override
    public void addCust(CustDto custDto) {
        Cust cust= CustMapper.mapToCust(custDto);
        custRepository.sqadd(cust.getId(), cust.getFirstName(), cust.getLastName(), cust.getEmail(),cust.getPhoneNo());
    }

    @Override
    public Cust getLast() {
        return custRepository.sqGetLast();
    }
}
