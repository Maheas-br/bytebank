import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private lisaTransferencia: any[];

  constructor() {
    this.lisaTransferencia = [];
  }

  get transferencias(){
    return this.lisaTransferencia;
  }

  adicionar(transferencia: any){
    this.hidratar(transferencia);

    this.transferencias.push(transferencia);
  }

  private hidratar(transferencia : any){
    transferencia.data = new Date();
  }
}
