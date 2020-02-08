import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeltlagerComponent } from './zeltlager.component';

describe('ZeltlagerComponent', () => {
   let component: ZeltlagerComponent;
   let fixture: ComponentFixture<ZeltlagerComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ZeltlagerComponent]
      })
         .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(ZeltlagerComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
