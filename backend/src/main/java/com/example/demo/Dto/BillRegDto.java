package com.example.demo.Dto;

public class BillRegDto {
    private Long id;
    private Long cust_id;
    private String firstName;
    private String payMode;
    private Long totCost;

    private double totGst;

    public double getTotGst() {
        return (double)(((int)(totCost*(0.18/1.18)*100))/100.0);
    }

    public void setTotGst(float totGst) {
        this.totGst = (double)(((int)(totCost*(0.18/1.18)*100))/100.0);
    }
    public BillRegDto() {
    }

    public BillRegDto(Long id, Long cust_id, String firstName, String payMode, Long totCost,double totGst) {
        this.id = id;
        this.cust_id = cust_id;
        this.firstName = firstName;
        this.payMode = payMode;
        this.totCost = totCost;
        this.totGst=totGst;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCust_id() {
        return cust_id;
    }

    public void setCust_id(Long cust_id) {
        this.cust_id = cust_id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getPayMode() {
        return payMode;
    }

    public void setPayMode(String payMode) {
        this.payMode = payMode;
    }

    public Long getTotCost() {
        return totCost;
    }

    public void setTotCost(Long totCost) {
        this.totCost = totCost;
    }
}