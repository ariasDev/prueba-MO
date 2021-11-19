import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RegistrationPageComponent } from './registration-page.component';
import { ReactiveFormsModule } from '@angular/forms'
import { LoginPageComponent } from '../login-page/login-page.component';

describe('RegistrationPageComponent', () => {
  let component: RegistrationPageComponent;
  let fixture: ComponentFixture<RegistrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationPageComponent],
      imports: [RouterTestingModule, ReactiveFormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe invocar a la funcion router.navigate', () => {
    const spyRouter = spyOn(component.router, 'navigate');

    component.goto();

    expect(spyRouter).toHaveBeenCalled()
    expect(spyRouter).toHaveBeenCalledWith([component.redirectionButtomText])
  });

  // it('debe invocar el metodo crear formulario', () => {
  //   const createFormSpy = spyOn(component, 'createForm');

  //   TestBed.createComponent(LoginPageComponent);

  //   expect(createFormSpy).toHaveBeenCalled();
  // })
});
