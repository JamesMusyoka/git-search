import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators' ;

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  // private repos: any[];
  private clientid = '6def820f25fb41577101';
  private clientsecret = '3e3555660560db83d02b5c0555bf21da3ab196dc';
  private access_token = 'a6bfd7698f44e9fbf477bb74015290a8431c7483';

  constructor( private http: HttpClient) {
    console.log('service is now ready');
    this.username = 'JamesMusyoka';
  }
  getProfileInfo() {
     return this.http.get('https://api.github.com/users/' + this.username +
     '?access_token=' + this.access_token)
    .pipe(map( res => res));
  }

  getRepoInfo() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?access_token=' + this.access_token)
    .pipe(map(res => res));

  }

  updateProfile(username: any) {
    this.username = username;


  }
  getUserRepos() {
    return this.http.get('https://api.github.com/users/JamesMusyoka/repos');
  }
  }
