import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ServiceDocumentationComponent } from './service-documentation/service-documentation.component';
import { SERVICES_ROUTES } from './services.routes';
import { UserService } from './user/user.service';
import { SharedModule } from '../shared/shared.module';
import { LocalStorageService } from './local-storage/local-storage.service';
import { AUserService } from './user/a-user.service';

@NgModule({ declarations: [ServiceDocumentationComponent], imports: [CommonModule,
        SharedModule,
        RouterModule.forChild(SERVICES_ROUTES)], providers: [
        UserService,
        LocalStorageService,
        { provide: 'LocalStorage', useValue: window.localStorage },
        { provide: AUserService, useClass: UserService },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class ServicesModule { }
