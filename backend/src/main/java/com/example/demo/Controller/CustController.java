package com.example.demo.Controller;

import com.example.demo.Dto.CustDto;
import com.example.demo.Entity.Cust;
import com.example.demo.Service.CustService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/Cust")
public class CustController {
    CustService custService;

    public CustController(CustService custService) {
        this.custService = custService;
    }

    @PostMapping
    public void addCust(@RequestBody CustDto custDto)
    {

        System.out.println(custDto.getId()+" "+custDto.getEmail()+" "+custDto.getFirstName()+" "+custDto.getLastName()+" "+custDto.getPhoneNo());
        custService.addCust(custDto);
    }

    @GetMapping
    public Cust getLast()
    {
        return custService.getLast();
    }
}
