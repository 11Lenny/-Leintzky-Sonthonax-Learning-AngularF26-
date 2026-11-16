import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-team-form',
  styleUrl: './team-form.css',
  templateUrl: './team-form.html',
})
export class TeamForm {
  private fb = inject(FormBuilder);

  teamForm = this.fb.group({
    name: ['', Validators.required, Validators.minLength(3)],
    city: ['', Validators.required],
    championships: [0, Validators.required],
    contender: [false],
  });
  private service: any;

  protected onSubmit() {
    if (this.teamForm.invalid) return;

    const value = this.teamForm.getRawValue();
    this.service.addTeam({team: Date.now(), ...value});
    this.teamForm.reset({ championships: 0, contender: false });

  }
}
