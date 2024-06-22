import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../_models/Project';
import { SafePipe } from '../_services/safe.pipe';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css'],
  providers: [SafePipe]
})
export class ProjectPageComponent implements OnInit {
  @Input() project = {} as Project;
  constructor(private safePipe: SafePipe) { }
  myTrustedUrl;

  ngOnInit(): void {
    this.myTrustedUrl = this.safePipe.transform(this.project.youtubeLink);
  }

  youtubeUrl(){
    return this.safePipe.transform(this.project.youtubeLink);
  }

}
