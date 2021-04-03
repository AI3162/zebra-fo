import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Router} from '@angular/router';
import {baseUrl} from '../../environments/environment';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  // @ts-ignore
  connexionForm: FormGroup;
  // @ts-ignore
  inscriptionForm: FormGroup;

  messageConnexion: any;
  erreurConnexion: any;
  messageInscription: any;
  erreurInscription: any;
  affichage: any = false;
  bouton: any = 'Inscription';
  // @ts-ignore
  url: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.initFormControlConnexion();
    this.initFormControlInscription();
  }

  initFormControlConnexion(): void {
    this.connexionForm = this.formBuilder.group({
      numero: new FormControl(),
      motDePasse: new FormControl()
    });
  }

  initFormControlInscription(): void {
    this.inscriptionForm = this.formBuilder.group({
      nom: new FormControl(),
      prenom: new FormControl(),
      genre: new FormControl(),
      code: new FormControl(),
      motDePasse: new FormControl()
    });
  }

  onConnexion(): void {
    this.messageConnexion = '';
    const formValue = this.connexionForm.value;
    const valeurNumero = formValue.numero;
    const valeurMdp = formValue.motDePasse;

    this.url = baseUrl + 'clients/connexion';
    const body = {
      phoneNumber: formValue.numero,
      password: formValue.motDePasse
    };

    this.http.post(this.url, body).subscribe(data => {
      // @ts-ignore
      if (data.status === 'success') {
        // @ts-ignore
        const token = data.data;
        this.messageConnexion = token;
        if (typeof token === 'string') {
          localStorage.setItem('token', token);
        }
        this.router.navigate(['historique/']);
      } else {
        // @ts-ignore
        alert(data.data);
      }
    });
  }

  onInscription(): void {
    this.messageConnexion = '';
    const formValue = this.inscriptionForm.value;
    const valeurNom = formValue.nom;
    const valeurPrenom = formValue.prenom;
    const valeurGenre = formValue.genre;
    const valeurCode = formValue.code;
    const valeurMdp = formValue.motDePasse;

    this.url = 'http://192.168.88.167:8093/clients/inscription';
    const body = {
      firstName: formValue.prenom,
      lastName: formValue.nom,
      gender: formValue.genre,
      phoneNumber: formValue.code,
      countryCode: 'MG',
      password: formValue.motDePasse
    };
    this.http.post(this.url, body).subscribe(data => {
      // @ts-ignore
      if (data.status === 'succes') {
        // @ts-ignore
        localStorage.setItem('token', data.data);
      } else {
        this.erreurConnexion = 'Erreur lors de l\'insertion';
      }

    });
  }

  onAffichage(): void {

    console.log('TY EEEE' + this.affichage);
    if (this.affichage === true) {
      this.bouton = 'Inscription';
      this.affichage = false;
    } else {
      this.bouton = 'Connexion';
      this.affichage = true;
    }

  }

}
