import { FirebasePlayerService } from './firebase-player.service';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Store } from '@ngrx/store';
import { Player } from '../../player-creation/models/player';
import { of } from 'rxjs';

describe('FirebasePlayerService', () => {
  let service: FirebasePlayerService;
  let firestore: AngularFirestore;
  let store: Store;

  beforeEach(() => {
    firestore = { collection: _ => {} } as AngularFirestore;
    store = { select: (_: any) => {} } as Store;
  });

  it('adds player to firebase', () => {
    const collection = { add: _ => Promise.resolve({ id: 'playerId' } as DocumentReference<Player>) } as AngularFirestoreCollection<Player>;
    spyOn(firestore, 'collection').and.returnValue(collection);
    service = new FirebasePlayerService(firestore, store);

    service.add({} as Player).subscribe(id => expect(id).toEqual('playerId'));
  });

  it('returns valueChanges of collection', () => {
    const playerCollection = [{}, {}] as Player[];
    const collection = { valueChanges: () => of(playerCollection) } as AngularFirestoreCollection<Player>;
    spyOn(firestore, 'collection').and.returnValue(collection);
    service = new FirebasePlayerService(firestore, store);

    service.valueChanges().subscribe(players => expect(players).toEqual(playerCollection));
  });
});