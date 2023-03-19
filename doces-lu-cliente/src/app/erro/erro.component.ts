import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-erro',
  templateUrl: './erro.component.html',
  styleUrls: ['./erro.component.css'],
})
export class ErroComponent implements OnInit {
  @Input() type = 'success';
  @Input() message: string = '';

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {}

  onClose() {
    this.bsModalRef.hide();
  }
}
