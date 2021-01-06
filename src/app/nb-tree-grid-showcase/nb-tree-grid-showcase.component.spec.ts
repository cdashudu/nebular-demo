import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbTreeGridShowcaseComponent } from './nb-tree-grid-showcase.component';

describe('NbTreeGridShowcaseComponent', () => {
  let component: NbTreeGridShowcaseComponent;
  let fixture: ComponentFixture<NbTreeGridShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbTreeGridShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbTreeGridShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
