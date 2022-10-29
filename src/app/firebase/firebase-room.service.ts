import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { RoomCreationRequest } from '../home/models/room-creation-request';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { Observable } from 'rxjs';

@Injectable()
export class FirebaseRoomService {

  constructor(private firestore: AngularFirestore) { }

  add(room: RoomCreationRequest): Observable<string> {
    return fromPromise(this.firestore.collection('rooms')
      .add(room)
      .then(roomReference => roomReference.id));
  }
}