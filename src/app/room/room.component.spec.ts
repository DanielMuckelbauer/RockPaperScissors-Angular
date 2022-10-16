import { RoomComponent } from './room.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FirebasePlayerService } from '../firebase/firebase-player.service';
import { PlayerCreationService } from '../player-creation/services/player-creation.service';

describe('RoomComponent', () => {
  let component: RoomComponent;

  let formBuilder: FormBuilder;
  let router: Router;
  let route: ActivatedRoute;
  let playerService: FirebasePlayerService;
  let playerCreationService: PlayerCreationService;

  beforeEach(() => {
    formBuilder = {} as FormBuilder;
    router = {} as Router;
    route = {} as ActivatedRoute;
    playerService = {} as FirebasePlayerService;
    playerCreationService = {} as PlayerCreationService;

    component = new RoomComponent(formBuilder, router, playerCreationService, playerService, route);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
