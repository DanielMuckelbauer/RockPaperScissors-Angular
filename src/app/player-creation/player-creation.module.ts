import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseModule } from '../firebase/firebase.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { PlayerCreationService } from './services/player-creation.service';
import { AvatarGenerator } from './services/avatar-generator.service';
import { MatDialogModule } from '@angular/material/dialog';
import { PlayerCreationModalComponent } from './components/player-creation-modal/player-creation-modal.component';
import { SpinnerModule } from '../shared-lib/spinner/spinner.module';

@NgModule({
  declarations: [PlayerCreationModalComponent],
  imports: [
    CommonModule,
    FirebaseModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    SpinnerModule,
  ],
  providers: [PlayerCreationService, AvatarGenerator],
  exports: [PlayerCreationModalComponent]
})
export class PlayerCreationModule {}
