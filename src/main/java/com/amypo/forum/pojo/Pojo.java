package com.amypo.forum.pojo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Pojo {
      
	private String employeeName;
	@JsonProperty("userId")
	private int employeeId;
	@JsonIgnore
	private int emplyeeAge;
	
	
	public Pojo(String employeeName, int employeeId, int emplyeeAge) {
		super();
		this.employeeName = employeeName;
		this.employeeId = employeeId;
		this.emplyeeAge = emplyeeAge;
	}
	
	public String getEmployeeName() {
		return employeeName;
	}
	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}
	public int getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}
	public int getEmplyeeAge() {
		return emplyeeAge;
	}
	public void setEmplyeeAge(int emplyeeAge) {
		this.emplyeeAge = emplyeeAge;
	}
	
}
