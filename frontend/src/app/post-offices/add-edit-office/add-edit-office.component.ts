import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostOfficeService } from '../post-office.service';
import { Router } from '@angular/router';

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
   * I am constructor!
   */
  constructor(
    private postOfficeService: PostOfficeService,
    private router: Router
  ) { }

  ngOnInit(): void {
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

    this.postOfficeService.addOrEditOfiice(officeFormData).subscribe();
  }

  /**
   * Navigate to the dashboard, on clicking the cancel button
   */
  onCancel(): void {
    this.router.navigate(['/dashboard']);
  }
}
