import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, map, mergeMap } from 'rxjs';
import { StudentService } from 'src/app/services/student.service';
@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentsPageComponent {
  public students:any[] = []
  public searchControl = new FormControl('')
  public form = new FormGroup({
    search: this.searchControl,
  });
  constructor(private studentService: StudentService) {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(2000),
        mergeMap((value) => this.studentService.searchStudent(value!))
      ).subscribe((results) => this.students = results)
  }
}
