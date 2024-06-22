import { Component, OnInit } from '@angular/core';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-house-cat',
  templateUrl: './house-cat.component.html',
  styleUrls: ['./house-cat.component.css']
})
export class HouseCatComponent implements OnInit {
  specificProject = {} as Project;

  constructor(private projectService : ProjectsService) { }

  ngOnInit(): void {
    this.specificProject = this.projectService.GetProjectById(6);
  }
}