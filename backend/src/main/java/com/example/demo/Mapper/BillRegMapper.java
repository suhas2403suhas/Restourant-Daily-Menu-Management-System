package com.example.demo.Mapper;

import com.example.demo.Dto.BillRegDto;
import com.example.demo.Entity.BillReg;

public class  BillRegMapper{
    public static BillRegDto mapToBillRegDto(BillReg billReg)
    {
        return new BillRegDto(
                billReg.getId(),
                billReg.getCust_id(),
                billReg.getFirstName(),
                billReg.getPayMode(),
                billReg.getTotCost(),
                billReg.getTotGst()
        );
    }

    public static BillReg mapToBillReg(BillRegDto billRegDto)
    {
        return new BillReg(
                billRegDto.getId(),
                billRegDto.getCust_id(),
                billRegDto.getFirstName(),
                billRegDto.getPayMode(),
                billRegDto.getTotCost(),
                billRegDto.getTotGst()
        );
    }
}
