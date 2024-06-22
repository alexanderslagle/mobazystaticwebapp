import { Component, OnInit } from '@angular/core';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-an-elfs-tune',
  templateUrl: './an-elfs-tune.component.html',
  styleUrls: ['./an-elfs-tune.component.css']
})
export class AnElfsTuneComponent implements OnInit {
  specificProject = {} as Project;

  constructor(private projectService : ProjectsService) { }

  ngOnInit(): void {
    this.specificProject = this.projectService.GetProjectById(5);
  }
}
