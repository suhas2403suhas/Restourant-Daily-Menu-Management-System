package com.example.demo.Controller;

import com.example.demo.Dto.BillRegDto;
import com.example.demo.Entity.BillReg;
import com.example.demo.Service.BillRegService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/bill")
public class BillRegController {
    BillRegService billRegService;

    public BillRegController(BillRegService billRegService) {
        this.billRegService = billRegService;
    }

    @PostMapping
    public void addBills(@RequestBody BillRegDto billRegDto)
    {
        System.out.println(billRegDto.getFirstName()+" "+billRegDto.getPayMode());
        billRegService.addBills(billRegDto);
    }

    @GetMapping
    public ResponseEntity<List<BillReg>> sqGetAll()
    {
        return new ResponseEntity<>(billRegService.sqGetAll(), HttpStatus.CREATED);
    }
}
