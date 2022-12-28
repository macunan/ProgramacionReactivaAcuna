import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  searchStudent(searchText: string): Observable<any> {
    console.log(searchText)
    return this.http.get('https://632d1e13519d17fb53b83117.mockapi.io/users', {
params: {
nombre: searchText
}
    }).pipe(
      map((value: any) => value)
    )
  }
}
