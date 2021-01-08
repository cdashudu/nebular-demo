import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { FormControl } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-nb-tree-grid-showcase',
  templateUrl: './nb-tree-grid-showcase.component.html',
  styleUrls: ['./nb-tree-grid-showcase.component.css']
})
export class NbTreeGridShowcaseComponent implements OnInit {
  source: LocalDataSource; // add a property to the component
  selectedItemNgModel
  selectedItemFormControl = new FormControl();
  availableColums = ["name", "email", "username" ]
  constructor() {
    this.source = new LocalDataSource(this.data); // create the source
   }

  ngOnInit(): void {
  }

  settings = {
    columns: {
      id: {
        title: 'ID',
        filter: false,
        hide: false
      },
      name: {
        title: 'Full Name',
        filter: false,
        hide: false
      },
      username: {
        title: 'User Name',
        filter: false,
        hide: false
      },
      email: {
        title: 'Email',
        filter: false,
        hide: false
      }
    }
  };

  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
    },
    
    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    }
  ];

  onSearch(query: string = '') {
console.log(query)
    if(query == ''){
      this.source = new LocalDataSource(this.data); // create the source
    }
    else{
      this.source.setFilter([
        // fields we want to include in the search
        {
          field: 'id',
          search: query
        },
        {
          field: 'name',
          search: query
        },
        {
          field: 'username',
          search: query
        },
        {
          field: 'email',
          search: query
        }
      ], false); 
    }
 
    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }
  onSelectionChange(event){
    console.log(event)
    let difference = this.availableColums.filter(x => !event.includes(x));
    
    event.forEach(element => {
      this.settings.columns[element].hide = false
    });

    difference.forEach(element => {
      this.settings.columns[element].hide = true
    });

    this.settings = Object.assign({}, this.settings)
  }

}
