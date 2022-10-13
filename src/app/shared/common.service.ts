import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Manager } from '../model/manager';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private serverurl = environment.url;
  constructor(private http: HttpClient, private router: Router) {}

  p: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    builtIn_Country: '',
  };

  m: Manager = {
    id: 0,
    emailId: '',
    username: '',
    password: '',
  };
  public loginManagerFromServer(manager: Manager): Observable<any> {
    return this.http.post<any>(this.serverurl + '/login', manager);
  }

  public registerManagerFromServer(manager: Manager): Observable<any> {
    return this.http.post<any>(this.serverurl + '/registermanager', manager);
  }

  public getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.serverurl + '/product/all');
  }
  public deleteProduct(id: number) {
    return this.http.delete(this.serverurl + '/product/delete/' + id);
  }
  public registerProduct(prod: Product): Observable<Product> {
    return this.http.post<Product>(this.serverurl + '/product/add', prod);
  }

  public updateProduct(prod: Product): Observable<Product> {
    return this.http.put<Product>(
      this.serverurl + '/product/update/' + prod.id,
      prod
    );
  }
  public logout() {
    this.router.navigate['/login'];
  }
}
