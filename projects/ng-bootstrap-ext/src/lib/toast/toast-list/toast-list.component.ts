import {Component, OnInit} from '@angular/core';
import {ToastService} from '../toast.service';

@Component({
  selector: 'ngbx-toast-list',
  templateUrl: './toast-list.component.html',
  styleUrls: ['./toast-list.component.scss'],
})
export class ToastListComponent implements OnInit {

  constructor(
    public toastService: ToastService,
  ) {
  }

  ngOnInit(): void {
  }

}
