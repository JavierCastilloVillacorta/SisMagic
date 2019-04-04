import { Injectable } from '@angular/core';
import { TypeUser } from '../../../../models/typeUser';
import { User } from '../../../../models/user';


@Injectable({
  providedIn: 'root'
})
export class SmenuService {
  types: TypeUser[] = [
    { idPrivilege: 1, namePrivilee: "Administrador"},
    { idPrivilege: 2, namePrivilee: "Almacén" },
    { idPrivilege: 3, namePrivilee: "Ventas" },
    { idPrivilege: 4, namePrivilee: "Caja" },
    { idPrivilege: 5, namePrivilee: "Logística" }
  ];


  user: User[] = [
    {name: "Orlando",  surname : " EL Mago"},
  ]

  constructor() { }
}
