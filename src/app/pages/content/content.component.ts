import { MarvelService } from './../../services/marvel.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
    photoCover: string = "https://lumiere-a.akamaihd.net/v1/images/iron-man_dft_m_db79b94b.jpeg";
    title: string = "MINHA NOTÍCIA";
    description: string = "It works!";
    private id: string | null = "0";

    constructor(private route: ActivatedRoute, private marvelService: MarvelService){
      this.route.paramMap.subscribe((value) => {
        this.id = value.get('id');
      })
    }

    ngOnInit(): void {
      this.marvelService.getCharacter(this.id).subscribe((res: any) => {
        let character = res.data.results[0] ?? {};
        this.photoCover = character.thumbnail.path + '.' + character.thumbnail.extension;
        this.title = character.name;
        this.description = character.description;
      })
    }
}
