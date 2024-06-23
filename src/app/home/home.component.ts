import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects = {} as Project[];

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Alex Slagle - Portfolio 👾')
 }

  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

}
