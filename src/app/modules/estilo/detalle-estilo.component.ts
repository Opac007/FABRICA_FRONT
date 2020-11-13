import { Component, OnInit } from '@angular/core';
import { EstiloService } from '../../services/estilo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Estilo } from '../models/estilo';

@Component({
  selector: 'app-detalle-estilo',
  templateUrl: './detalle-estilo.component.html',
  styleUrls: ['./detalle-estilo.component.css']
})
export class DetalleEstiloComponent implements OnInit {

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
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/listaEstilo']);
  }

}
