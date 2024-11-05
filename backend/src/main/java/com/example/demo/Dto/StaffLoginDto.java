package com.example.demo.Dto;

public class StaffLoginDto {

    private Long id;
    private Long staffId;
    private String firstName;
    private String lastName;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public StaffLoginDto(Long id,Long staffId, String firstName, String lastName) {
        this.id=id;
        this.staffId = staffId;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public Long getStaffId() {
        return staffId;
    }

    public void setStaffId(Long staffId) {
        this.staffId = staffId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public StaffLoginDto() {
    }
}
