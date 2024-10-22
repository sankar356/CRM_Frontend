import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LeadsService } from './leads.service';
import { TableComponent } from '../../shared/table/table.component';
import { RouterLink } from '@angular/router';
import { TagContentType } from '@angular/compiler';

@Component({
  selector: 'app-leads',
  standalone: true,
  imports: [CommonModule,RouterLink,TableComponent],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.scss'
})
export class LeadsComponent implements OnInit{
  leadObj : Lead;
  data :any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  isLoading: boolean = false;  // Loading state
  errorMessage: string | null = null;
  usersData: {
    name: string;
    Email: string;
    Mobile: string;
    Website: string;
    organization: string;
    jobTitle: string;
    status: string;
    Action:any;
  }[] = [];
  routerLink="reportdata"
  view =''
  constructor(public leadService : LeadsService){
    this.leadObj =new Lead()
  }
  getLead(){
    this.isLoading = true;
    this.errorMessage =null;
    this.leadService.getLead().subscribe((post:any) =>{
      this.data = post;
      console.log(post)
      this.usersData = [];
      for (let lead of this.data) {
        this.usersData.push({
          name: lead.firstName + ' ' + lead.lastName, // Combine first and last name
          Email: lead.email || 'N/A', // Handle missing mobile number
          Mobile: lead.mobileNumber || 'N/A', // Handle missing email
          Website: lead.website || 'N/A', // Assuming gender exists in the lead data
          organization: lead.organization || 'N/A', // Assuming fatherName exists in the lead data
          jobTitle: lead.jobTitle || 'N/A', // Assuming fatherName exists in the lead data
          status: lead.status || 'N/A',
          Action: undefined
        });
      }
      this.isLoading =false
    },(error) => {
      console.error('Error fetching lead data', error);
      this.errorMessage = 'Failed to load lead data';  // Set error message
      this.isLoading = false;  // Reset loading state
    })
  }
 

  for () {
    
  }
ngOnInit(): void {
  this.getLead()
}
}
export class Lead{
  namePrefix:string;
  firstName : string;
  lastName :string;
  jobTitle: string;
  organization : string;
  accountName : string;
  employeeNumber :string;
  website : string;
  email :string;
  alternativeEmail:string;
  officePhone :string;
  mobileNumber :string;
  status : string;
 constructor(){
  this.namePrefix = '';
  this.firstName ='';
  this.lastName = '';
  this.jobTitle ='';
  this.organization = '';
  this.accountName = '';
  this.employeeNumber ='';
  this.website = '';
  this.email = '';
  this.alternativeEmail = '';
  this.officePhone = '';
  this.mobileNumber ='';
  this.status = '';
 } 
}