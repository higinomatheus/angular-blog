import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BigCardComponent } from "../../components/big-card/big-card.component";
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { SmallCardComponent } from '../../components/small-card/small-card.component';

import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BigCardComponent, MenuTitleComponent, CommonModule, SmallCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ MarvelService ]
})
export class HomeComponent implements OnInit{
  characters: any[] = [];
  randomCharacter?: any = {};

  constructor(private marvelService: MarvelService){}

  ngOnInit() {
      this.marvelService.getCharacters().subscribe((res: any) => {
        this.characters = res.data.results;
        let randomIndex = Math.floor(Math.random() * this.characters.length);
        this.randomCharacter = this.characters[randomIndex];

      })
  }
}
