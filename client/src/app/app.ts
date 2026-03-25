import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { lastValueFrom } from 'rxjs';

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
  
  async ngOnInit() {
    this.members.set(await this.getMembers());
  }

  async getMembers(){
    try{
      return lastValueFrom(this.http.get('https://localhost:5001/api/members')); // http vraca observable 
    } catch (error)
    {
      console.log(error);
      throw error;
    }
  }

/*  getMembers() {
      this.http.get('https://localhost:5001/api/members').subscribe({
        next: (members) => {
        console.log(members);
      },
      error: (error) => {
        console.log(error);
        }
      });
    }   */
}
