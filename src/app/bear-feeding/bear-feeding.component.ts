import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-bear-feeding',
  templateUrl: './bear-feeding.component.html',
  styleUrls: ['./bear-feeding.component.css']
})
export class BearFeedingComponent {
  specificProject = {} as Project;

  constructor(private projectService : ProjectsService) { }

  ngOnInit(): void {
    this.specificProject = this.projectService.GetProjectById(5);
  }
}
