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

    constructor(private route: ActivatedRoute){
      this.route.paramMap.subscribe((value) => {
        console.log(value.get("id"));
      })
    }

    ngOnInit(): void {

    }
}
