import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  private http = inject(HttpClient);
  protected readonly title = 'Dating app';
  protected members= signal<any>([]); // signal sluzi da kada se vrednost promeni UI se automatski osvezi gde god se taj signal koristi
  //ovaj signal je inicijalno prazan niz
  
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/members').subscribe({
      next: response => this.members() = response,
      error: error => console.log(error),
      complete: () => console.log('Completed the http request')
    })
  }
}
