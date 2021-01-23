import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostOfficeService } from '../post-office.service';
import { ActivatedRoute, Router } from '@angular/router';
import PostOffice from '../post-office.interface';

@Component({
  selector: 'app-add-edit-office',
  templateUrl: './add-edit-office.component.html',
  styleUrls: ['./add-edit-office.component.scss']
})
export class AddEditOfficeComponent implements OnInit {

  /**
   *  Add/edit form and it's defined fields
   */
  officeForm = new FormGroup({
    id: new FormControl({ value: '', disabled: true }, { }),
    PLZ: new FormControl(null, { validators: [Validators.required] }),
    name: new FormControl(null, { validators: [Validators.required] }),
  });

  /**
   * Flag to check the mode if the form data should be edited or added
   */
  isAddMode: boolean;

  /**
   * Id of the office which is in the edit mode
   */
  id: string;

  /**
   * I am constructor!
   */
  constructor(
    private postOfficeService: PostOfficeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Get the office ID from the route
    this.id = this.route.snapshot.params.id;
    this.isAddMode = !this.id;

    // Get office data if the mode is to edit the data
    if (!this.isAddMode) {
      this.postOfficeService.getOfficeById(this.id)
        .subscribe((data: PostOffice) => this.officeForm.patchValue(data));
    }
  }

  /**
   * Saving the form values
   */
  onSave(): void {

    // stop here if form is invalid
    if (this.officeForm.invalid) {
      return;
    }

    const officeFormData = this.officeForm.getRawValue();

    // Create or update the office based on the mode
    if (this.isAddMode) {
      this.postOfficeService.createOffice(officeFormData).subscribe(() => {
          this.router.navigate(['/post-offices']);
      });
    } else {
      this.postOfficeService.updateOffice(officeFormData).subscribe(() => {
          this.router.navigate(['/post-offices']);
      });
    }
  }

  /**
   * Navigate to the dashboard, on clicking the cancel button
   */
  onCancel(): void {
    this.router.navigate(['/dashboard']);
  }
}
