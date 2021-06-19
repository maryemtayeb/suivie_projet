import { Component, OnInit } from '@angular/core';
import { Recommandation } from 'app/classes/recommandation';
import { RecommandationService } from 'app/services/recommandation.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  grade:string;
  recommandation:Recommandation;
  recommandations:Recommandation[];
  constructor(private recommandationService:RecommandationService) { }
  
  ngOnInit(): void {
    this.read();
    this.recommandation=new Recommandation();
    this.grade=localStorage.getItem("grade");
  }
  add()
  {
    let rec=Object.assign({},this.recommandation);
    this.recommandationService.create_NewRecommandation(rec);
    this.recommandation=new Recommandation();

  }
  read()
  {
    this.recommandationService.read_Recommandations().subscribe(data => {
  
      this.recommandations = data.map(e => {
        return {
         id: e.payload.doc.id,
  
         titre: e.payload.doc.data()["titre"],
         texte: e.payload.doc.data()["texte"],
       
  
  
  
        };
      });
      console.log(this.recommandations);
  
    });
  
  
  }
  delete(id)
  {
    if(confirm("êtes vous sûre de vouloir supprimer? "))
    {
      this.recommandationService.delete_Recommandation(id);
    }
  }
  
}
