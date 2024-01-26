package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;

public class Physician extends User implements HIPAACompliantUser {
	private ArrayList<String> patientNotes;
	
	// TO DO: Constructor that takes an IDcopy
	
	public Physician() {
		super();
	}
	public Physician(Integer IDcopy) {
		super();
		this.id=IDcopy;
	}
	



	// TO DO: Implement HIPAACompliantUser!
	
	public void newPatientNotes(String notes, String patientName, Date date) {
        String report = String.format(
            "Datetime Submitted: %s \n", date);
        report += String.format("Reported By ID: %s\n", this.id);
        report += String.format("Patient Name: %s\n", patientName);
        report += String.format("Notes: %s \n", notes);
        this.patientNotes.add(report);
    }

	

	



	@Override
	public boolean assignPin(int pin) {
		String c=Integer.toString(pin);
		if(c.length()==4) {
			return true;
		}else {return false;}
		
	}

	

	@Override
	public boolean accessAuthorized(Integer confirmedAuthID) {
		if(this.getId()==confirmedAuthID) {
		return true;
		}else {return false;}
	}
	
    // TO DO: Setters & Getters
}
