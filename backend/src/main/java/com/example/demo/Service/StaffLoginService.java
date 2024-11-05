package com.example.demo.Service;

import com.example.demo.Dto.StaffLoginDto;

public interface StaffLoginService {
    void editInfo(StaffLoginDto staffLoginDto);
    StaffLoginDto getInfo();
}
