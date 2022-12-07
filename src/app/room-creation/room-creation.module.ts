import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoomCreationModalComponent } from './components/room-creation-modal/room-creation-modal.component';
import { SpinnerModule } from '../shared-lib/spinner/spinner.module';

@NgModule({
  declarations: [RoomCreationModalComponent],
  imports: [
    CommonModule,
    MatRadioModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    HttpClientModule,
    SpinnerModule
  ],
  providers: [],
  exports: [RoomCreationModalComponent]
})
export class RoomCreationModule {}
