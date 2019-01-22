import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  username: string;
  repos: any;
  constructor(private profileService: ProfileService) {

  }
  call_profile() {
    this.profileService. updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
    this.profileService.updateProfile(this.username);
    this.profileService.getRepoInfo().subscribe(repos => {
      console.log('Repos work');
      this.repos = repos;


    });
  }

  ngOnInit() {
  }

}
