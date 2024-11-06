import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { countries, CountryCode, NamePrefix } from '../../../shared/method/enums';
import { AddressService } from '../../../services/address.service';
import { Router, RouterLink } from '@angular/router';
const webUrlRegex = "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?";
@Component({
  selector: 'app-addlead',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './addlead.component.html',
  styleUrl: './addlead.component.scss'
})
export class AddleadComponent {
// onFileSelected($event: Event) {
// throw new Error('Method not implemented.');
// }
  addLeadsForm! :FormGroup;
  data :any[] = []
  namePrefixes = Object.values(NamePrefix);
  countryCodelist = countries;
  countryCode = Object.values(CountryCode);
  countrys = Object.values(this.data);
  countryList : Array<any> = [];
  stateList :Array<any> = [];
  cityList :Array<any> = [];
  code : Array<any> = [];
  selectedCountryId: any
  selectedStateId: any
  submitted = false;
  // fileInput: any;
  // isLoading: boolean = true;
constructor(
  public addressService : AddressService
){
  this.addLeadsForm = new FormGroup({

    namePrefix: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
    ]),
    
    countryCodeMobile: new FormControl('', [Validators.required]),
    mobileNumber: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    // socialMediaUrl: new FormControl('', [Validators.required, Validators.pattern(webUrlRegex)]),
    jobTitle: new FormControl('', [Validators.required]),
    organization: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
    employee: new FormControl('', [Validators.required]),
    profileImg: new FormControl('', [Validators.required]),
    countryCodeOffice: new FormControl('', [Validators.required]),
    officePhone: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    alternateEmail: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
    ]),
    primaryAddress1: new FormControl('', [Validators.required]),
    comments: new FormControl('', [Validators.required]),
    secondaryAddress1: new FormControl('', [Validators.required]),
    city1: new FormControl('', [Validators.required]),
    // postalCode1: new FormControl('', [Validators.required]),
    state1: new FormControl('', [Validators.required]),
    country1: new FormControl('', [Validators.required]),
    primaryAddress2: new FormControl('', [Validators.required]),
    secondaryAddress2: new FormControl('', [Validators.required]),
    city2: new FormControl('', [Validators.required]),
    // postalCode2: new FormControl('', [Validators.required]),
    state2: new FormControl('', [Validators.required]),
    country2: new FormControl('', [Validators.required]),
    leadSource: new FormControl('', [Validators.required]),
    // industry: new FormControl('', [Validators.required]),
    // leadSourceAndDescription: new FormControl('', [Validators.required]),
    // referredBy: new FormControl('', [Validators.required]),
    leadStatus: new FormControl('', [Validators.required]),
    // opportunityAmount: new FormControl('', [Validators.required]),
    // statusDescription: new FormControl('', [Validators.required]),
    // campaign: new FormControl('', [Validators.required]),
    website: new FormControl('', [Validators.pattern(webUrlRegex)]),
    // assignedBy: new FormControl('', [Validators.required]),
  });
}
ngOnInit(): void {
  this.getCountrys();
  // this.getState();
  // this.loadData()
  this.getCountryCode();
}
 
// loadData() {
//   setTimeout(() => {
//     this.isLoading = false; 
//   }, 5000); 
// }

onSubmit(): void {
  this.submitted = true;
  const isFormValid = this.addLeadsForm.valid;
  if (isFormValid) {
    console.log('Form Submitted:', this.addLeadsForm.value);
  } else {
    // Mark all controls as touched to trigger validation messages
    this.addLeadsForm.markAllAsTouched();
    console.log('Form is invalid');
  }
}

getCountrys(): void {
  this.addressService.getCountry().subscribe(
    (response: any) => {
      this.countryList = response;
      console.log('Countries:', this.countryList);
    },
    (error: any) => {
      console.error('Error fetching countries:', error);
    }
  );
}
getCountryCode(): void {
  this.addressService.getCountry().subscribe(
    (response: any) => {
      this.code = response;
      console.log('Countries:', this.code);
    },
    (error: any) => {
      console.error('Error fetching countries:', error);
    }
  );
}

onCountryChange(event: any): void {
  this.selectedCountryId = event.target.value;
  this.getState(this.selectedCountryId);
}

getState(countryId: string): void {
  this.addressService.getState(countryId).subscribe(
    (response: any) => {
      this.stateList = response;
      console.log('States:', this.stateList);
    },
    (error: any) => {
      console.error('Error fetching states:', error);
    }
  );
}
onStateChange(event: any): void {
  this.selectedStateId = event.target.value;
  this.getCity(this.selectedStateId);
}
getCity(stateId: string): void {
  this.addressService.getCity(stateId).subscribe(
    (response: any) => {
      this.cityList = response;
      console.log('cityList:', this.cityList);
    },
    (error: any) => {
      console.error('Error fetching City:', error);
    }
  );
}
// triggerFileInput(): void {
//   this.fileInput.nativeElement.click();
// }

}

