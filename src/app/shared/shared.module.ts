import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CdkTableModule } from '@angular/cdk/table'
import {
  MdToolbarModule, MdSidenavModule, MdAutocompleteModule, MdButtonModule,
  MdButtonToggleModule, MdCardModule, MdCheckboxModule, MdChipsModule,
  MdDatepickerModule, MdDialogModule, MdGridListModule, MdIconModule,
  MdInputModule, MdListModule, MdMenuModule, MdNativeDateModule,
  MdProgressBarModule, MdRadioModule, MdSelectModule, MdTabsModule,
  MdTooltipModule, MdSlideToggleModule, MdTableModule, MdPaginatorModule, MdSortModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MdToolbarModule, MdSidenavModule, MdAutocompleteModule, MdButtonModule,
  MdButtonToggleModule, MdCardModule, MdCheckboxModule, MdChipsModule,
  MdDatepickerModule, MdDialogModule, MdGridListModule, MdIconModule,
  MdInputModule, MdListModule, MdMenuModule, MdNativeDateModule,
  MdProgressBarModule, MdRadioModule, MdSelectModule, MdTabsModule,
  MdTooltipModule, MdSlideToggleModule, MdTableModule, MdPaginatorModule, MdSortModule
];

const MODULES = [
  ...MATERIAL_MODULES,
  CommonModule,
  ReactiveFormsModule,
  FlexLayoutModule,
  CdkTableModule,
]

@NgModule({
  imports: MODULES,
  exports: MODULES,
  declarations: []
})
export class SharedModule { }
