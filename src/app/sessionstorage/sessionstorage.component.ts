import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sessionstorage',
  templateUrl: './sessionstorage.component.html',
  styleUrls: ['./sessionstorage.component.css']
})
export class SessionstorageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('id').innerHTML = sessionStorage.getItem('userID');
    document.getElementById('name').innerHTML = sessionStorage.getItem('username');
    document.getElementById('dob').innerHTML = sessionStorage.getItem('birthDate');
    document.getElementById('userage').innerHTML = sessionStorage.getItem('age');
  }

}
