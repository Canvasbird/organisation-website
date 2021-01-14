import { Component } from "@angular/core";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  mainActive = false;
  projectActive = false;
  joinusActive = false;
  teamActive = false;
  contributeActive = false;
  contactActive = false;

  constructor(){}

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
