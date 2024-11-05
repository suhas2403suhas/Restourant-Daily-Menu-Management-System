package com.example.demo.Mapper;

import com.example.demo.Dto.StaffLoginDto;
import com.example.demo.Entity.StaffLogin;

public class StaffLoginMapper {

    public static StaffLogin mapToStaffLogin(StaffLoginDto staffLoginDto)
    {
        return new StaffLogin(
                staffLoginDto.getId(),
                staffLoginDto.getStaffId(),
                staffLoginDto.getFirstName(),
                staffLoginDto.getLastName()
        );
    }

    public static StaffLoginDto mapToStaffLoginDto(StaffLogin stafflogin)
    {
        return new StaffLoginDto(
                stafflogin.getId(),
                stafflogin.getStaffId(),
                stafflogin.getFirstName(),
                stafflogin.getLastName()
        );
    }
}
