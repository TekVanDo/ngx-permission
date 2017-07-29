import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RoleStoreService } from '../../services/role-store/role-store.service';
import { Role } from '../../types/role.type';
import { RolePermissionsService } from '../../services/role-permissions/role-permissions.service';
import { OnlyForRolesDirective } from './only-for-roles.directive';

const baseRole: Role = {
  name: 'test',
  validationFunction: () => true,
  priority: 1
};
const secondRole: Role = {
  name: 'test2',
  validationFunction: () => false,
  priority: 2
};

@Component({ selector: 'ngx-test-cmp', template: '' })
class TestComponent {
  constructor() {
  }
}

function createTestComponent(template: string): ComponentFixture<TestComponent> {
  return TestBed.overrideComponent(TestComponent, { set: { template } })
    .createComponent(TestComponent);
}

describe('OnlyForRolesDirective', () => {
  let fixture: ComponentFixture<any>;

  afterEach(() => {
    fixture = null !;
  });

  beforeEach(() => {
    const roles = new RoleStoreService();
    roles.defineManyRoles([baseRole, secondRole]);

    TestBed.configureTestingModule({
      declarations: [TestComponent, OnlyForRolesDirective],
      providers: [RolePermissionsService, { provide: RoleStoreService, useValue: roles }],
      imports: [CommonModule],
    });
  });

  it('should work in a template attribute', async(() => {
    const template = `<span *onlyForRoles="['test']">hello</span>`;
    fixture = createTestComponent(template);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(fixture.debugElement.queryAll(By.css('span')).length).toEqual(1);
      expect(fixture.nativeElement.textContent).toBe('hello');
    });
  }));

  it('should`t work in a template attribute', async(() => {
    const template = `<span *onlyForRoles="['test2']">hello</span>`;
    fixture = createTestComponent(template);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(fixture.debugElement.queryAll(By.css('span')).length).toEqual(0);
    });
  }));
});
