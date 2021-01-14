import { Component } from "@angular/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  mainActive = false;
  projectActive = false;
  joinusActive = false;
  teamActive = false;
  contributeActive = false;
  contactActive = false;

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
