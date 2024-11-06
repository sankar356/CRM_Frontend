import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, Output } from '@angular/core';
import { LeadsService } from './leads.service';
import { TableComponent } from '../../shared/table/table.component';
import { Router, RouterLink } from '@angular/router';
import { TagContentType } from '@angular/compiler';
import { EventEmitter } from 'node:stream';
import { ViewleadsComponent } from './viewleads/viewleads.component';
import { DrawerService } from '../../services/drawer.service';


@Component({
  selector: 'app-leads',
  standalone: true,
  imports: [CommonModule,RouterLink,TableComponent,ViewleadsComponent],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.scss'
})
export class LeadsComponent implements OnInit {
  leadObj: Lead;
  data: any[] = [];
  isLoading: boolean = false;
  errorMessage: string | null = null;
  usersData: any[] = [];
  routerLink = "reportdata";
  isOpen: number | null = null; // Track which dropdown is open
  isOpenLead = false;
  selectedLeadId: number | null = null;

 headers = ['leadId','Name', 'Email', 'Mobile','Website','Organization','jobTitle','status'];

  constructor(public leadService: LeadsService,
     public router: Router,
    public drawerService : DrawerService,) {
      this.leadObj = new Lead();
  }

  ngOnInit(): void {
      this.getLead();
  }

  getLead() {
      this.isLoading = true;
      this.errorMessage = null;

      this.leadService.getLead().subscribe(
          (post: any) => {
              this.data = post;
              this.usersData = this.data.map(lead => ({
                id: lead.id,
                  name: lead.firstName + ' ' + lead.lastName,
                  Email: lead.email || 'N/A',
                  Mobile: lead.mobileNumber || 'N/A',
                  Website: lead.website || 'N/A',
                  organization: lead.organization || 'N/A',
                  jobTitle: lead.jobTitle || 'N/A',
                  status: lead.status || 'N/A',
                   // Store the id for dropdown functionality
              }));
              this.isLoading = false;
          },
          (error) => {
              console.error('Error fetching lead data', error);
              this.errorMessage = 'Failed to load lead data';
              this.isLoading = false;
          }
      );
  }
  nave = false;
  isDrawerOpen: boolean = false;

  toggleDropdown(id: number) {
    this.isOpen = this.isOpen === id ? null : id;
    
  }
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown-container')) {
      this.isOpen = null;
    }
  }
  toggleDrawer(leadId?: number) {
    this.isDrawerOpen = !this.isDrawerOpen;
    // console.log("Selected Lead ID:", leadId);
  }
  viewStaff(row: any) {
    this.isDrawerOpen = !this.isDrawerOpen;
    console.log('Viewing staff:', row);
    // this.router.navigate([ row.id]);
    this.selectedLeadId = row || null
  }

  editStaff(row: any) {
    console.log('Editing staff:', row);
    this.router.navigate(['/lead/edit_lead/', row.id]); // Navigate to the edit page
    this.selectedLeadId = row || null
  }

  objectKeys(obj: any) {
    return Object.keys(obj);
  } 
  openNav() {
    this.isOpenLead = true;
  }
  
}

export class Lead {
  id: number;
  namePrefix: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  organization: string;
  accountName: string;
  employeeNumber: string;
  website: string;
  email: string;
  alternativeEmail: string;
  officePhone: string;
  mobileNumber: string;
  status: string;

  constructor() {
      this.id = 0;
      this.namePrefix = '';
      this.firstName = '';
      this.lastName = '';
      this.jobTitle = '';
      this.organization = '';
      this.accountName = '';
      this.employeeNumber = '';
      this.website = '';
      this.email = '';
      this.alternativeEmail = '';
      this.officePhone = '';
      this.mobileNumber = '';
      this.status = '';
  }
}