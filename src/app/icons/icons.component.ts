import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'app/classes/reclamation';
import { ReclamationService } from 'app/services/reclamation.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  grade:string;
  reclamation:Reclamation;
  reclamations:Reclamation[];
  constructor(private reclamationService:ReclamationService) { }
  
  ngOnInit(): void {
    this.reclamation=new Reclamation();
    this.read();

    this.grade=localStorage.getItem("grade");
  }
  add()
  {
    this.reclamation.date=Date();
    let rec=Object.assign({},this.reclamation);

    this.reclamationService.create_NewReclamation(rec);
    this.reclamation=new Reclamation();

  }
  read()
  {
    this.reclamationService.read_Reclamations().subscribe(data => {
  
      this.reclamations = data.map(e => {
        return {
         id: e.payload.doc.id,
  
         titre: e.payload.doc.data()["titre"],
         description: e.payload.doc.data()["description"],
         date: e.payload.doc.data()["date"],
       
  
  
  
        };
      });
      console.log(this.reclamations);
  
    });
  
  
  }
  delete(id)
  {
    if(confirm("êtes vous sûre de vouloir supprimer? "))
    {
      this.reclamationService.delete_Reclamation(id);
    }
  }
  
}
