import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ThfMenuItem, ThfModalAction, ThfModalComponent, ThfTableComponent } from '@totvs/thf-ui';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild(ThfModalComponent, { static: true }) thfModal: ThfModalComponent;
  @ViewChild(ThfTableComponent, { static: true }) thfTable: ThfTableComponent;

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  modal_type = ''

  menus: Array<ThfMenuItem> = [
    { label: 'home', action: this.printMenuAction, icon: 'thf-icon-home', shortLabel: 'Home' }
  ];


  printMenuAction() {
    this.router.navigate(['menu'])
  }
  //Ações primárias
  private modal_primary_action_confirm_filter: ThfModalAction = {
    label: 'Confirmar',
    danger: false,
    action: () => {
      alert('requisição sendo feita')
    }
  }

  private modal_primary_action_confirm_apont: ThfModalAction = {
    label: 'Confirmar',
    danger: false,
    action: () => {
      alert('requisição sendo feita')
    }
  }

  //Ações secundárias
  private modal_secondary_action_close: ThfModalAction = {
    label: 'Fechar',
    danger: true,
    action: () => {
      this.thfModal.close()
    }
  }

  //Ações primárias dos modais
  getPrimaryActions(): any {
    let actions = {
      filter: this.modal_primary_action_confirm_filter,
      apontamento: this.modal_primary_action_confirm_apont
    }

    return actions[this.modal_type]

  }

  //Ações secundárias dos modais
  getSecondaryActions(): any {
    let actions = {
      filter: this.modal_secondary_action_close,
      apontamento: this.modal_secondary_action_close
    }

    return actions[this.modal_type]
  }

  openFilterModal() {
    this.modal_type = 'filter'
    this.thfModal.open()
  }

  openApontModal() {
    this.modal_type = 'apontamento'
    this.thfModal.open()
  }

}
