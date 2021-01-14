import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mainActive = false;
  projectActive = false;
  joinusActive = false;
  teamActive = false;
  contributeActive = false;
  contactActive = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onToggle(sectionName: string) {
    this.mainActive= false;
    this.projectActive = false;
    this.joinusActive = false;
    this.teamActive= false;
    this.contributeActive= false;
    this.contactActive= false;

    if(sectionName === 'home')
    this.mainActive = true

    if(sectionName === 'project')
    this.projectActive = true

    if(sectionName === 'joinus')
    this.joinusActive = true

    if(sectionName === 'team')
    this.teamActive = true

    if(sectionName === 'contribute')
    this.contributeActive = true

    if(sectionName === 'contact')
    this.contactActive = true


  }
}
