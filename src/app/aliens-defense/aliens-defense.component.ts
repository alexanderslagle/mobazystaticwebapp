import { Component, OnInit } from '@angular/core';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-aliens-defense',
  templateUrl: './aliens-defense.component.html',
  styleUrls: ['./aliens-defense.component.css']
})
export class AliensDefenseComponent implements OnInit {
  specificProject = {} as Project;

  constructor(private projectService : ProjectsService) { }

  ngOnInit(): void {
    this.specificProject = this.projectService.GetProjectById(3);
  }
}
