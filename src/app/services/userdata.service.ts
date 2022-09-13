import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  url='http://localhost:3000/api/courses/'

  constructor(private http:HttpClient) { }
  saveUser(data:any)
  {
    return this.http.post(this.url,[JSON.stringify(data)])

  }

}
