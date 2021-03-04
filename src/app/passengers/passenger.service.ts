import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Passenger } from '../passenger';

const URL = 'http://localhost:3000/passengers'

@Injectable({
    providedIn: 'root'
})

export class PassengerService {
    constructor(private http: HttpClient) {}

    getPassengers(): Observable<Passenger[]> {
        return this.http.get<Passenger[]>(URL);
    }

    deletePassenger(id: number): Observable<void | any> {
        return this.http.delete(`${URL}/${id}`)
    }

    addPassenger(passenger: Passenger): Observable<void | any>  {
        return this.http.post(URL, passenger);
    }

    editPassenger(passenger: Passenger): Observable<void | any>  {
        return this.http.put(`${URL}/${passenger.id}`, passenger);
    }
}