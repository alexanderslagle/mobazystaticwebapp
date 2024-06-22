import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Alex Slagle - Bio 🧑‍💻')
 }

  ngOnInit(): void {
  }

}
