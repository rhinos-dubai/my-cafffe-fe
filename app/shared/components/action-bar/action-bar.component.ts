import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-action-bar',
    templateUrl: './action-bar.component.html',
    styleUrls: ['./action-bar.component.scss']
})

export class ActionBarComponent {
    @Input() title;
}
