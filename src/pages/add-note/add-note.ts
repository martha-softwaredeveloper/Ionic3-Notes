import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NoteService } from '../../providers/note-service/note-service';
import { Note } from '../../models/note.model';
import { FormGroup, FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {
  formGroup: FormGroup;
  note: Note;
  date: Date = new Date();
  title: string = '';
  content: string =  '';

  constructor(public navCtrl: NavController, private NoteService: NoteService) {
    this.formGroup = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      date: new FormControl()
    })
  }
  saveNote(note: Note){
    this.NoteService.saveNote(note);
    this.navCtrl.pop();
  }
}