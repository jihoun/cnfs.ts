import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterTestingModule } from '@angular/router/testing';
import { TableModule } from '@cnfs/angular-table';
import { NotificationService } from '@cnfs/common';
import { of } from 'rxjs';
import { UserListComponent } from '../../components/user-list/user-list.component';
import { UsersAdapter } from '../../services/users.adapter';
import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  const usersAdapterMock: Partial<UsersAdapter> = {
    getTableData: () =>
      of({
        data: [],
        meta: {},
      }),
  };
  const notificationServiceMock: Partial<NotificationService> = {};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent, UserListComponent],
      imports: [
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatTableModule,
        TableModule,
        RouterTestingModule,
      ],
      providers: [
        { provide: UsersAdapter, useValue: usersAdapterMock },
        { provide: NotificationService, useValue: notificationServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
