import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private router: Router) {}

  saibaMais(): void {
    this.router.navigate(['/sobre']); // Navega para a rota '/sobre'
  }

  irParaLogin(): void {
    // Implemente a navegação para a página de login, se necessário
  }
}
