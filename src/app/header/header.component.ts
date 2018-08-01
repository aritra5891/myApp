import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	collapsed = true;
	@Output() onNavigationClicked = new EventEmitter<string>();

	toggleCollapsed() {
		this.collapsed = !this.collapsed;
	}

	onSelect(pageType : string) {
		this.onNavigationClicked.emit(pageType);
	}


}
