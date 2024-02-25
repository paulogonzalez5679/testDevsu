import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesBPService {


  constructor(private http: HttpClient) { }

  getProduct(): Observable<any> {
    const url = 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products';
    const headers = new HttpHeaders().set('authorID', '200');

    return this.http.get(url, { headers });
  }

}
