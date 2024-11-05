package com.example.demo.Service.Impl;

import com.example.demo.Dto.StaffLoginDto;
import com.example.demo.Entity.StaffLogin;
import com.example.demo.Mapper.StaffLoginMapper;
import com.example.demo.Repository.StaffLoginRepository;
import com.example.demo.Service.StaffLoginService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StaffLoginServiceImpl implements StaffLoginService {

    StaffLoginRepository staffLoginRepository;

    public StaffLoginServiceImpl(StaffLoginRepository staffLoginRepository) {
        this.staffLoginRepository = staffLoginRepository;
    }
    @Override
    public void editInfo(StaffLoginDto staffLoginDto) {
        staffLoginRepository.sqadd(staffLoginDto.getId(), staffLoginDto.getStaffId(), staffLoginDto.getFirstName(), staffLoginDto.getLastName());
    }

    @Override
    public StaffLoginDto getInfo() {
       StaffLogin staffLogin = staffLoginRepository.sqget();
       return StaffLoginMapper.mapToStaffLoginDto(staffLogin);
    }
}
