package com.example.demo.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="hello")
public class StaffLogin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    public StaffLogin(Long id,Long staffId, String firstName, String lastName) {
        this.id=id;
        this.staffId = staffId;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public StaffLogin() {
    }
}
