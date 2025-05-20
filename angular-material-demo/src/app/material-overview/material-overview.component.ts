import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { map, Observable, startWith } from 'rxjs';
import { BadgeOverviewExample } from './components/badge/badge.component';
import { BottomSheetOverviewExample } from './components/bottom-sheet/bottom-sheet.component';
import { ButtonOverviewExample } from './components/button/button.component';
import { ButtonToggleModeExample } from './components/button-toggle/button-toggle.component';
import { CardOverviewExample } from './components/card/card.component';
import { CheckboxOverviewExample } from './components/checkbox/checkbox.component';
import { ChipsDragDropExample } from './components/chips/chips.component';
import { DatepickerOverviewExample } from './components/datepicker/datepicker.component';
import { DialogOverviewExample } from './components/dialog/dialog.component';
import { DividerOverviewExample } from './components/divider/divider.component';
import { ExpansionOverviewExample } from './components/expansion-panel/expansion-panel.component';
import { FormFieldOverviewExample } from './components/form-field/form-field.component';
import { GridListOverviewExample } from './components/grid-list/grid-list.component';
import { IconOverviewExample } from './components/icon/icon.component';
import { InputFormExample } from './components/input/input.component';
import { ListOverviewExample } from './components/list/list.component';
import { MenuOverviewExample } from './components/menu/menu.component';
import { PaginatorOverviewExample } from './components/paginator/paginator.component';
import { ProgressBarIndeterminateExample } from './components/progress-bar/progress-bar.component';
import { ProgressSpinnerOverviewExample } from './components/progress-spinner/progress-spinner.component';
import { RadioOverviewExample } from './components/radio-button/radio-button.component';
import { RippleOverviewExample } from './components/ripples/ripples.component';
import { SelectOverviewExample } from './components/select/select.component';
import { SidenavAutosizeExample } from './components/sidenav/sidenav.component';
import { SlideToggleOverviewExample } from './components/slide-toggle/slide-toggle.component';
import { SliderOverviewExample } from './components/slider/slider.component';
import { SnackBarOverviewExample } from './components/snackbar/snackbar.component';
import { SortOverviewExample } from './components/sort-header/sort-header.component';
import { StepperVerticalExample } from './components/stepper/stepper.component';
import { TableBasicExample } from './components/table/table.component';
import { TimepickerOverviewExample } from './components/timepicker/timepicker.component';
import { ToolbarOverviewExample } from './components/toolbar/toolbar.component';
import { TooltipOverviewExample } from './components/tooltip/tooltip.component';
import { TreeNestedChildAccessorOverviewExample } from './components/tree/tree.component';

const examples = [
  BadgeOverviewExample,
  BottomSheetOverviewExample,
  ButtonOverviewExample,
  ButtonToggleModeExample,
  ButtonToggleModeExample,
  CardOverviewExample,
  CheckboxOverviewExample,
  ChipsDragDropExample,
  DatepickerOverviewExample,
  DialogOverviewExample,
  DividerOverviewExample,
  ExpansionOverviewExample,
  FormFieldOverviewExample,
  GridListOverviewExample,
  IconOverviewExample,
  InputFormExample,
  ListOverviewExample,
  MenuOverviewExample,
  PaginatorOverviewExample,
  ProgressBarIndeterminateExample,
  ProgressSpinnerOverviewExample,
  RadioOverviewExample,
  RippleOverviewExample,
  SelectOverviewExample,
  SidenavAutosizeExample,
  SlideToggleOverviewExample,
  SliderOverviewExample,
  SnackBarOverviewExample,
  SortOverviewExample,
  StepperVerticalExample,
  TableBasicExample,
  TableBasicExample,
  TimepickerOverviewExample,
  ToolbarOverviewExample,
  TooltipOverviewExample,
  TreeNestedChildAccessorOverviewExample,
];

@Component({
  selector: 'app-material-overview',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    ...examples,
  ],
  templateUrl: './material-overview.component.html',
  styleUrl: './material-overview.component.scss',
})
export class MaterialOverviewComponent {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> = new Observable();
  examples = examples;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
