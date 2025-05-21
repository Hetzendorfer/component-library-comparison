import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { BadgeComponent } from './components/badge/badge.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ChipsComponent } from './components/chips/chips.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DividerComponent } from './components/divider/divider.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { IconComponent } from './components/icon/icon.component';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
import { MenuComponent } from './components/menu/menu.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { RipplesComponent } from './components/ripples/ripples.component';
import { SelectComponent } from './components/select/select.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';
import { SliderComponent } from './components/slider/slider.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { SortHeaderComponent } from './components/sort-header/sort-header.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { TableComponent } from './components/table/table.component';
import { TimepickerComponent } from './components/timepicker/timepicker.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TreeComponent } from './components/tree/tree.component';

const examples = [
  AutocompleteComponent,
  BadgeComponent,
    BottomSheetComponent,
    ButtonComponent,
    ButtonToggleComponent,
    CardComponent,
    CheckboxComponent,
    ChipsComponent,
    DatepickerComponent,
    DialogComponent,
    DividerComponent,
    ExpansionPanelComponent,
    FormFieldComponent,
    GridListComponent,
    IconComponent,
    InputComponent,
    ListComponent,
    MenuComponent,
    PaginatorComponent,
    ProgressBarComponent,
    ProgressSpinnerComponent,
    RadioButtonComponent,
    RipplesComponent,
    SelectComponent,
    SidenavComponent,
    SlideToggleComponent,
    SliderComponent,
    SnackbarComponent,
    SortHeaderComponent,
    StepperComponent,
    TableComponent,
    TimepickerComponent,
    ToolbarComponent,
    TooltipComponent,
    TreeComponent]

@Component({
  selector: 'app-material-overview',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    CommonModule,
    ...examples,
  ],
  templateUrl: './material-overview.component.html',
  styleUrl: './material-overview.component.scss',
})
export class MaterialOverviewComponent {
  examples = examples
}
