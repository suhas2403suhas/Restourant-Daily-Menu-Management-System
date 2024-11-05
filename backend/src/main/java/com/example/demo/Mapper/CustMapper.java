package com.example.demo.Mapper;

import com.example.demo.Dto.CustDto;
import com.example.demo.Entity.Cust;

public class CustMapper {
    public static CustDto mapToCustDto(Cust cust){
        return new CustDto(cust.getId(),
                cust.getFirstName(),
                cust.getLastName(),
                cust.getEmail(),
                cust.getPhoneNo()
                );
    }

    public static Cust mapToCust(CustDto custDto){
        return new Cust(custDto.getId(),
                custDto.getFirstName(),
                custDto.getLastName(),
                custDto.getEmail(),
                custDto.getPhoneNo()
                );
    }
}
