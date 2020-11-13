import { Component, OnInit } from '@angular/core';
import { EstiloService } from '../../services/estilo.service';
import { Estilo } from '../models/estilo';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-estilo',
  templateUrl: './nuevo-estilo.component.html',
  styleUrls: ['./nuevo-estilo.component.css']
})
export class NuevoEstiloComponent implements OnInit {

  descripcion = '';
  valor = '';

  constructor(
    private estiloService: EstiloService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onCreate(): void {
    const estilo = new Estilo(this.descripcion, this.valor);
    console.log(estilo);
    this.estiloService.save(estilo).subscribe(
      data => {
        this.toastr.success('Estilo Creado', 'OK', {
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
