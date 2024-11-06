import { Component,EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { LeadsService } from '../leads.service';
import { AlertService } from '../../../services/alert.service';
import { SettingsComponent } from '../../settings/settings.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewleads',
  standalone: true,
  imports: [SettingsComponent,CommonModule,RouterLink],
  templateUrl: './viewleads.component.html',
  styleUrl: './viewleads.component.scss'
})
export class ViewleadsComponent {
  @Input() editId: any;
  public leadData: any;

  // Output event emitter to receive lead ID from parent or another component
  @Output() leadIdSelected : EventEmitter<number> = new EventEmitter();

  constructor(
    public leadService: LeadsService,
    public alertService: AlertService,
    public router: Router,
  ) {}
  ngOnChanges(): void {
    if (this.editId) {
      this.getLeadById(this.editId.id);
    }
    console.log('id',this.editId)
  }

  getLeadById(id: number) {
    this.leadService.getLeadById(id).subscribe(
      (response: any) => {
        if (response) { 
          this.leadData = response; 
          console.log("LeadData:", this.leadData);
        } else {
          console.error("Unexpected response structure:", response);
          this.alertService.error('No lead data found.');
        }
      },
      (error: any) => {
        const msg = error.error?.detail || 'Invalid Data!'; 
        this.alertService.error(msg);
      }
    );
  }
  editLead(row: any) {
    console.log('edit lead :', row);
    this.router.navigate([ 'edit_lead:',row]);
  }
}
