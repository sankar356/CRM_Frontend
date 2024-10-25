import { Component,EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeadsService } from '../leads.service';
import { AlertService } from '../../../services/alert.service';
import { SettingsComponent } from '../../settings/settings.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewleads',
  standalone: true,
  imports: [SettingsComponent,CommonModule],
  templateUrl: './viewleads.component.html',
  styleUrl: './viewleads.component.scss'
})
export class ViewleadsComponent {
  public editId: any;
  public leadData: any;

  // Output event emitter to receive lead ID from parent or another component
  @Output() leadIdSelected : EventEmitter<number> = new EventEmitter();

  constructor(
    public leadService: LeadsService,
    public alertService: AlertService,
  ) {}

  ngOnInit(): void {
    this.leadIdSelected.subscribe((id: number) => {
      this.editId = id;
      this.getLeadById(this.editId);
      });
      console.log(this.editId)
  }

  getLeadById(id: any) {
    this.leadService.getLeadById(id).subscribe(
        (response: any) => {
            // Check if response and response.data are defined
            if (response && response.data) {
                this.leadData = response.data;
                console.log("LeadData:", this.leadData); // Log the lead data
            } else {
                console.error("Unexpected response structure:", response);
                this.alertService.error('No lead data found.');
            }
        },
        (error: any) => {
            const msg = error.error?.message || 'Invalid Data!';
            this.alertService.error(msg); // Handle error with alert service
        },
    );
}
}
