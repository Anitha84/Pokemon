import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { tap } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
interface pokemonListResult{
  name: string,
  url: string;
}

interface pokemonDetailResult{
  abilities: [],
  base_experience: number,
  forms: [],
  game_indices: [],
  height: number,
  held_items: [],
  id: number,
  is_default: boolean,
  location_area_encounters: string,
  moves: [],
  name: string,
  order: number,
  past_types: [],
  species: {},
  sprites: {},
  stats: [],
  types: [],
  weight: number
}

@Component({
  selector: 'pok-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent implements OnInit, OnDestroy {
  pokemonSubscribe: Subscription = new Subscription;
  pokemons: pokemonListResult[] = [];
  pokemonDetails: pokemonDetailResult[] = [];
  dataSource = new MatTableDataSource<Element>([]);
  displayedColumns: string[] = ['name'];
  @ViewChild(MatPaginator, { static: false }) paginator!:MatPaginator;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
     this.pokemonSubscribe = this.dataService.getData('https://pokeapi.co/api/v2/pokemon').pipe(tap(
      resp => {
        this.pokemons = resp.results;
        this.dataSource = new MatTableDataSource<Element>(resp.results);
        this.dataSource.paginator = this.paginator;

        for(let i=1; i<= this.pokemons.length; i++){ 
          this.dataService.getData('https://pokeapi.co/api/v2/pokemon/'+i).pipe(
            tap(
              resp => {
                this.pokemonDetails.push(resp);
              }
            )
          ).subscribe();
        }
        
      })).subscribe(); 
  }
  
  ngOnDestroy(): void {
    this.pokemonSubscribe.unsubscribe();
  }

}
