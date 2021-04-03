import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {baseUrl} from '../../environments/environment';


@Component({
  selector: 'app-historique-appel',
  templateUrl: './historique-appel.component.html',
  styleUrls: ['./historique-appel.component.scss']
})
export class HistoriqueAppelComponent implements OnInit {
  tableau = Array();
  // @ts-ignore
  i: number;
  // @ts-ignore
  token: string;
  // @ts-ignore
  url: string;
  messageHistorique: any;
  erreurHistorique: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.history();
    // this.history(this.route.snapshot.params['token']);
  }

  history(): void {
    this.i = 0;
    this.tableau = Array();
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    headers.set('Accept', '*/*');
    this.url = 'appels/2020-01-01/2020-12-31';
    this.http.get(baseUrl + this.url, {headers})
      .subscribe(data => {
        // @ts-ignore
        if (data.status === 'success') {
          // @ts-ignore
          data.data.forEach(doc => {
            this.tableau[this.i] = {
              id: doc.id,
              calledNum: doc.calledNum,
              callDate: doc.callDate,
              sent: doc.sent,
            };
            this.i++;
          });
        } else {
          // @ts-ignore
          this.erreurHistorique = data.data;
        }
      });
  }
}
