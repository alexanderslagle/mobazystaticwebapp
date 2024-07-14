import { Component, OnInit } from '@angular/core';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-turtle-trot',
  templateUrl: './turtle-trot.component.html',
  styleUrls: ['./turtle-trot.component.css']
})
export class TurtleTrotComponent implements OnInit {
  specificProject = {} as Project;

  constructor(private projectService : ProjectsService) { }

  ngOnInit(): void {
    this.specificProject = this.projectService.GetProjectById(6);
  }
}
