import { Component, OnInit } from '@angular/core';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-monster-cleaning',
  templateUrl: './monster-cleaning.component.html',
  styleUrls: ['./monster-cleaning.component.css']
})
export class MonsterCleaningComponent implements OnInit {
  specificProject = {} as Project;

  constructor(private projectService : ProjectsService) { }

  ngOnInit(): void {
    this.specificProject = this.projectService.GetProjectById(2);
  }
}
