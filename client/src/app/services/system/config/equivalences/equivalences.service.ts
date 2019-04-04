import { Injectable } from '@angular/core';
import { Equivalences } from 'src/app/models/equivalences';

@Injectable({
  providedIn: 'root'
})
export class EquivalencesService {

  jsonEquivalences : Equivalences [] = [
    {
      idEquivalence: 1,
      codEquivalence : "0001",
      codFrabricEquivalence : "13101-11050/051",
      descriptionEquivalence : "Original",
      stateEquivalence: 1
    },
    {
      idEquivalence: 2,
      codEquivalence : "0002",
      codFrabricEquivalence : "13101/03-11080/051",
      descriptionEquivalence : "Original",
      stateEquivalence: 1
    },
    {
      idEquivalence: 3,
      codEquivalence : "0003",
      codFrabricEquivalence : "MD181583",
      descriptionEquivalence : "Original",
      stateEquivalence: 1
    },
    {
      idEquivalence: 4,
      codEquivalence : "0004",
      codFrabricEquivalence : "45046-29265",
      descriptionEquivalence : "Original",
      stateEquivalence: 2
    },
    {
      idEquivalence: 5,
      codEquivalence : "0005",
      codFrabricEquivalence : "71300-48700",
      descriptionEquivalence : "Original",
      stateEquivalence: 1
    }

  ]


  constructor() { }
}
