  
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RecommandationService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  create_NewRecommandation(record) {
    return this.firestore.collection('Recommandations').add(record);
  }

  read_Recommandations() {
    return this.firestore.collection('Recommandations').snapshotChanges();
  }

  update_Recommandation(recordID, record) {
    this.firestore.doc('Recommandations/' + recordID).update(record);
    console.log('updated');
  }

  delete_Recommandation(record_id) {
    this.firestore.doc('Recommandations/' + record_id).delete();
  }
}