import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  register_types(type: string) {
    let params = new HttpParams()
      .set('type_user', type)
    return this.http.post<any>("http://127.0.0.1:8000/api/types_users", params);
  }

  types() {
    return this.http.get("http://127.0.0.1:8000/api/types_users");
  }

  useruptade(id:number, type: string) {
    let params = new HttpParams()
      .set('type_user', type)
    return this.http.put<any>("http://127.0.0.1:8000/api/types_users/" + id, params);
  }

  userdelete(id: number) {
    return this.http.delete("http://127.0.0.1:8000/api/types_users/" + id);
  }


}
