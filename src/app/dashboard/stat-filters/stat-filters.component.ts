import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'jb-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css'],
})
export class StatFiltersComponent implements OnInit, OnDestroy {
  filters: FormGroup;
  valueSub: Subscription;

  constructor(fb: FormBuilder) {
    this.filters = fb.group({
      title: ['', Validators.minLength(3)],
      author: ['', Validators.minLength(3)],
    });

    this.valueSub = this.filters.valueChanges.subscribe((value) =>
      console.log('The form has changed!', value)
    );
  }

  ngOnInit(): void {}

  submit(): void {
    console.log(this.filters.value);
  }

  ngOnDestroy(): void {
    this.valueSub.unsubscribe();
  }
}
