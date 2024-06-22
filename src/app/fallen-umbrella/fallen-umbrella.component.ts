import { Component, OnInit } from '@angular/core';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-fallen-umbrella',
  templateUrl: './fallen-umbrella.component.html',
  styleUrls: ['./fallen-umbrella.component.css']
})
export class FallenUmbrellaComponent implements OnInit {
  specificProject = {} as Project;

  constructor(private projectService : ProjectsService) { }

  ngOnInit(): void {
    this.specificProject = this.projectService.GetProjectById(1);
  }
}
