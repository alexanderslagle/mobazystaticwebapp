import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-hood-search',
  templateUrl: './hood-search.component.html',
  styleUrls: ['./hood-search.component.css']
})
export class HoodSearchComponent implements OnInit {
  specificProject = {} as Project;

  constructor(private projectService : ProjectsService) { }

  ngOnInit(): void {
    this.specificProject = this.projectService.GetProjectById(4);
  }
}