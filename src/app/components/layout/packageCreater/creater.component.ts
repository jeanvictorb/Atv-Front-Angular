import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import Swal from 'sweetalert2';
import { Package } from '../../../models/pacote';
import { PackageService } from '../../../service/package.service';

@Component({
  selector: 'app-packageCreater',
  standalone: true,
  imports: [FormsModule, MdbFormsModule, CommonModule],
  templateUrl: './creater.component.html',
  styleUrls: ['./creater.component.scss']
})
export class PackageCreaterComponent {

  package: Package = new Package;

  nameCard!: string;
  descriptionCard!: string;
  rotaAtivida = inject(ActivatedRoute);
  packageService = inject(PackageService);
  router = inject(Router);

  constructor() {
    let id = this.rotaAtivida.snapshot.params['id'];
    if(id){
      this.findById(id);
    }
  }

  findById(id: number){
    this.packageService.findById(id)
    .then((pack: Package) => {
      this.package = pack;
    })
    .catch((erro) => {
      Swal.fire(erro?.message, '', 'error');
      
    });
  }

  createPackage() {
    this.packageService.create(this.package)
      .then(() => {
        this.package = {
          title: "",
          description: "",
          activities: []
        };
        Swal.fire('Package criado com sucesso!', '', 'success');
      })
      .catch((erro) => {
        Swal.fire(erro?.message, '', 'error');
      });
  }

  updatePackage() {
    if (this.package.id !== null) {
      this.packageService.update(this.package)
        .then(() => {
          Swal.fire('Package atualizado com sucesso!', '', 'success');
        })
        .catch((erro) => {
          Swal.fire(erro?.message, '', 'error');
        });
    }
  }

  deletePackage() {
    if (this.package.id !== null) {
      this.packageService.delete(Number(this.package.id))
        .then(() => {
          Swal.fire('Package deletado com sucesso!', '', 'success');
          this.router.navigate(['/principal/creater']);
        })
        .catch((erro) => {
          Swal.fire(erro?.message, '', 'error');
        });
    }
  }
}
