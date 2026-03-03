import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss',
})
export class AvatarComponent {
  nombre = signal<string>('Avatar');
  colorNombre = signal<string>('#000000');
  tamanoNombre = signal<number>(16);
  colorFondo = signal<string>('#fff');
  tamano = signal<number>(150);
  tieneLentes = signal<boolean>(false);
  tipoExpresion = signal<number>(1);

  cambiarNombre(event: Event) {
    const input = event.target as HTMLInputElement;
    this.nombre.set(input.value);
  }

  cambiarColorNombre(event: Event) {
    const input = event.target as HTMLInputElement;
    this.colorNombre.set(input.value);
  }

  cambiarTamanoNombre(event: Event) {
    const input = event.target as HTMLInputElement;
    this.tamanoNombre.set(parseInt(input.value));
  }

  cambiarColor(event: Event) {
    const input = event.target as HTMLInputElement;
    this.colorFondo.set(input.value);
  }
  cambiarTamano(event: Event) {
    const input = event.target as HTMLInputElement;
    this.tamano.set(parseInt(input.value));
  }
  toggleLentes() {
    this.tieneLentes.update(flag => !flag); //es una funcion que recibe el valor actual y devuelve el valor actual negado
  }
  setExpresion(tipo: number) {
    this.tipoExpresion.set(tipo);
  }
}