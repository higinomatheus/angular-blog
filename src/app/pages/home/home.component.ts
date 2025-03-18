import { Component } from '@angular/core';
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BigCardComponent, MenuTitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
