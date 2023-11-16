import { EnviarEmailComponent } from './../../enviar-email/enviar-email.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';



describe('EnviarEmailComponent', () => {
  let component: EnviarEmailComponent;
  let fixture: ComponentFixture<EnviarEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnviarEmailComponent]
    });
    fixture = TestBed.createComponent(EnviarEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
