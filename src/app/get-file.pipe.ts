import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Pipe({
  name: 'getFile'
})
export class GetFilePipe implements PipeTransform {

  constructor(private http: HttpClient) {}

  transform(value: string, ...args: unknown[]): Observable<string> {
    return this.http.get(
      `/assets/examples/awesome-test/${value}`, { responseType: 'text'});
  }
}
