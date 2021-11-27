
import { RepositoryService } from './services/repository.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gemography-Frontend-Task';
  repositories: any = [];

  constructor(private repositoryService: RepositoryService) {}

  ngOnInit(){
    this.repositoryService.getAllReposetories().subscribe(
      response =>{
        this.repositories = response;
        console.log(response)
      },
      err => {console.log(err)}
    )
  }
}
