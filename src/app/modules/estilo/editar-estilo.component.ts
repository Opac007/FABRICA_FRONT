import { Component, OnInit } from '@angular/core';
import { Estilo } from '../models/estilo';
import { EstiloService } from '../../services/estilo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-estilo',
  templateUrl: './editar-estilo.component.html',
  styleUrls: ['./editar-estilo.component.css']
})
export class EditarEstiloComponent implements OnInit {

  estilo: Estilo = null;

  constructor(
    private estiloService: EstiloService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.estiloService.detail(id).subscribe(
      data => {
        this.estilo = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.estiloService.update(id, this.estilo).subscribe(
      data => {
        this.toastr.success('Estilo Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        setTimeout(() => {
          },
          1500);
          this.router.navigate(['/listaEstilo']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        // this.router.navigate(['/']);
      }
    );
  }

}
