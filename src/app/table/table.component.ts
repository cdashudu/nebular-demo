import { Component, OnInit } from '@angular/core';
import { IKeyboardShortcutListenerOptions, KeyboardKeys } from 'ngx-keyboard-shortcuts';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  keyboardShortcutDef1: IKeyboardShortcutListenerOptions = {
    description: 'save',
    keyBinding: [KeyboardKeys.Ctrl, 'e']
};

keyboardShortcutDef2: IKeyboardShortcutListenerOptions = {
  description: 'save',
  keyBinding: [KeyboardKeys.Ctrl, 'f']
};

keyboardShortcutDef3: IKeyboardShortcutListenerOptions = {
  description: 'save',
  keyBinding: [KeyboardKeys.Ctrl, 'g']
};

save1(){
  console.log("save1")
}
save2(){
  console.log("save2")
}
save3(){
  console.log("save3")
}
}
