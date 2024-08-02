import { Component, Input, ViewEncapsulation } from '@angular/core';
/**
 * Wrap some component with an identifier/legend.
 * @example
 * <k-fieldset [defaultCollapsed]="defaultCollapsed"></k-fieldset>
 */
@Component({
  selector: 'k-fieldset',
  templateUrl: './k-fieldset.component.html',
  styleUrls: ['./k-fieldset.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class KFieldsetComponent {
  /**
   * show colapset status
   */
  @Input() defaultCollapsed: boolean = false;
  /**
   * text legend
   */
  @Input() kFieldsetLegend: string = "";

}

