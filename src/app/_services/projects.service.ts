import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {id: 0, name: "Lost Duckling", description: "Puzzle game", platforms: "Apple and Android devices.", role: "Game Designer, Game Programmer, and Project Lead.",
     toolsUsed: "Unity, C#, Azure DevOps, Git, Photoshop, and Draw.IO.", imagePath: "../../assets/Lost Duckling.png", routerLink: "/games/lost-duckling",
     summary: "Lost Duckling is a casual puzzle game. The player switches between a pig and a fish to rescue the Lost Duckling.",
     youtubeLink: "https://www.youtube.com/embed/2PDt_ViOF9o", appleAppStoreLink: "https://apps.apple.com/us/app/lost-duckling/id1619563190", 
     googlePlayLink: "https://play.google.com/store/apps/details?id=com.Mobazy.LostDuckling", releasedOnAppStores: true, youtubeHeight: "560", youtubeWidth: "315"},
    
    {id: 1, name: "Fallen Umbrella", description: "Platformer", platforms: "Apple and Android devices.", role: "Game Designer and Game Programmer.",
    toolsUsed: "Unity, C#, Azure DevOps, Git, and Draw.IO.", imagePath: "../../assets/Fallen Umbrella.png", routerLink: "/games/fallen-umbrella",
    summary: "Fallen Umbrella is a hyper casual platformer. Players click the Umbrella button to slow down gravity.",
    youtubeLink: "https://www.youtube.com/embed/nujRhsh2zI0", appleAppStoreLink: "https://apps.apple.com/us/app/fallen-umbrella/id1434503750", 
    googlePlayLink: "https://play.google.com/store/apps/details?id=com.ModernPhilosophy.Fallen", releasedOnAppStores: true, youtubeHeight: "560", youtubeWidth: "315"},
    
    {id: 2, name: "Monster Cleaning", description: "First person shooter", platforms: "Apple and Android devices.", role: "Game Programmer.",
    toolsUsed: "Unity, C#, Azure DevOps, and Git.", imagePath: "../../assets/Monster Cleaning.png", routerLink: "/games/monster-cleaning", 
     summary: " Monster Cleaning is a first person shooter where the player moves in all directions, shooting and taking cover from rushing monsters. Alex worked with OVIVO Games, Alex was pitched a few game designs and selected one. Alex implemented the game based on a game design document. Alex worked with the Project Manager, Artist, and CEO to bring the game to life.", youtubeLink: "https://www.youtube.com/embed/nqJeoB2njps", appleAppStoreLink: "https://apps.apple.com/us/app/monster-cleaning/id1543320589", 
     googlePlayLink: "https://play.google.com/store/apps/details?id=com.slaglegames.monster", releasedOnAppStores: true, youtubeHeight: "560", youtubeWidth: "315"},
    
    {id: 3, name: "Aliens Defense", description: "Tap defense", platforms: "Apple and Android devices.", role: "Game Designer and Game Programmer.",
     toolsUsed: "Unity, C#, Azure DevOps, Git, and Excel.", imagePath: "../../assets/Aliens Defense.png", routerLink: "/games/aliens-defense", 
     summary: "Aliens Defense is a defense game where the player rotates the world and taps the aliens before they abduct the humans.",
     youtubeLink: "https://www.youtube.com/embed/4ar9bWELoo0", appleAppStoreLink: "https://apps.apple.com/us/app/aliens-defense/id1531481008", 
     googlePlayLink: "https://play.google.com/store/apps/details?id=com.slaglegames.Aliens", releasedOnAppStores: true, youtubeHeight: "560", youtubeWidth: "315"},
    
    {id: 4, name: "Hood Search", description: "Find the hidden objects", platforms: "Apple and Android devices.", role: "Game Designer and Game Programmer.",
    toolsUsed: "Unity, C#, Azure DevOps, and Git.", imagePath: "../../assets/Hood Search.png", routerLink: "/games/hood-search",
     summary: "In Hood Search the player rotates the world in search of stolen items. The player taps the item once they found it.", youtubeLink: "https://www.youtube.com/embed/vcl3H2VJE9I", appleAppStoreLink: "https://apps.apple.com/us/app/hood-search/id1510119672", 
     googlePlayLink: "https://play.google.com/store/apps/details?id=com.slaglegames.NeighborhoodSearch", releasedOnAppStores: true, youtubeHeight: "560", youtubeWidth: "315"},
  ];
  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) : Project{
    return this.projects[id];
  }

  GetFeaturedProject() : Project{
    return this.projects[0];
  }

}
