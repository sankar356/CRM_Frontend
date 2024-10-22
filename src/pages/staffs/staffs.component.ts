// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { StaffsService } from './staffs.service';

// @Component({
//   selector: 'app-staffs',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './staffs.component.html',
//   styleUrls: ['./staffs.component.scss']  // Corrected to styleUrls
// })
// export class StaffsComponent implements OnInit {

//   // Example properties
//   staffObj: Staff;
//   navList: any[] = [];  // Ensure it gets populated correctly
//   data: Staff[] = [];

//   constructor(public staffService: StaffsService) {
//     this.staffObj = new Staff();
//   }

//   ngOnInit() {
//     this.getStaffs();  // Fetch data when component is initialized
//   }

//   getStaffs() {
//     this.staffService.getStaff(this.staffObj).subscribe(
//       (res: any) => {
//         console.log('API Response:', res);
//         // Assuming the array of staff members is under a key 'staffs'
//         this.data = res.staffs || [];  // Ensure correct path based on the response structure
//       },
//       (error) => {
//         console.error('Error fetching staff data', error);
//       }
//     );
//   }

//   // Placeholder logic for unimplemented methods
//   isDropdownOpen(arg0: any): boolean {
//     return false;  // Placeholder logic
//   }

//   toggleDropdown(arg0: any) {
//     // Placeholder logic for dropdown toggle functionality
//     console.log('Toggling dropdown for element:', arg0);
//   }
// }
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StaffsService } from './staffs.service';
import { TableComponent } from '../../shared/table/table.component';
import { DateUtilsService } from '../../services/date-utils.service';

@Component({
  selector: 'app-staffs',
  standalone: true,
  imports: [CommonModule,TableComponent],
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.scss']
})
export class StaffsComponent implements OnInit {
  staffObj: Staff;
  navList: any[] = [];
  data: any[] = [];
  header = ['S.NO','Name', 'Gender', 'Email','Mobile Number','Date Of Joining','Status']
  usersData: {
    SnO : number;
    name: string;
    Gender: string;
    Email: string;
    Mobilenumber: string;
    Dateofjoining: string;
    Status: string;
  }[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  isLoading: boolean = false;  
  errorMessage: string | null = null;  
  

  constructor(public staffService: StaffsService,
    private dateUtils: DateUtilsService,
  ) {
    this.staffObj = new Staff();
  }

  ngOnInit() {
    this.getStaffs();  // Fetch data when component is initialized
  }

  getStaffs() {
    this.isLoading = true;  
    this.errorMessage = null; 
    this.staffService.getStaff().subscribe(
      (posts: any) => {
        // console.log('API Response:', posts);
        this.data = posts.data;
        this.usersData = [];
        // for (let staff of this.data) {
          this.data.forEach((staff: any, index: number) =>{
            const istDate = this.dateUtils.convertUTCtoIST(staff.dateOfJoining)
            const formattedDate = this.dateUtils.formatDate(istDate,'YYYY-MM-DD')
          this.usersData.push({
            SnO: index+1,
            name: staff.name || 'N/A',
            Mobilenumber: staff.mobileNumber || 'N/A',
            Email: staff.emailId || 'N/A',
            Gender: staff.gender || 'N/A',
            Dateofjoining: formattedDate || 'N/A',
            Status: staff.maritalStatus || 'N/A'
          });
        });
        this.isLoading = false;  
      },
      (error) => {
        console.error('Error fetching staff data', error);
        this.errorMessage = 'Failed to load staff data';  
        this.isLoading = false;  
      }
    );
  }
  trackById(index: number,data:any){
    return data.id
  }
  getPaginatedData(): Staff[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.data.slice(start, start + this.itemsPerPage);
  }

  isDropdownOpen(arg0: any): boolean {
    return false;  
  }

  toggleDropdown(arg0: any) {
    console.log('Toggling dropdown for element:', arg0);
  }
  
}


// Define the Staff class
export class Staff {
  name: string;
  gender: string;
  fatherName: string;
  emailId: string;
  mobileNumber: string;
  alternateNumber: string;
  maritalStatus: string;
  bloodGroup: string;
  dateOfJoining: string;
  officialEmailId: string;
  password: string;
  role: number;
  reportTo: number;
  currentAddress: number;
  permanentAddress: number;
  ug: string;
  pg: string;
  emergencyContactName1: string;
  emergencyMobileNumber1: string;
  emergencyRelationShip1: string;
  emergencyContactName2: string;
  emergencyMobileNumber2: string;
  emergencyRelationShip2: string;
  id: any;

  constructor() {
    this.name = '';
    this.gender = '';
    this.fatherName = '';
    this.emailId = '';
    this.mobileNumber = '';
    this.alternateNumber = '';
    this.maritalStatus = '';
    this.bloodGroup = '';
    this.dateOfJoining = '';
    this.officialEmailId = '';
    this.password = '';
    this.role = 0;
    this.reportTo = 0;
    this.currentAddress = 0;
    this.permanentAddress = 0;
    this.ug = '';
    this.pg = '';
    this.emergencyContactName1 = '';
    this.emergencyMobileNumber1 = '';
    this.emergencyRelationShip1 = '';
    this.emergencyContactName2 = '';
    this.emergencyMobileNumber2 = '';
    this.emergencyRelationShip2 = '';
  }
}