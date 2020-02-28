import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { error } from 'util';

import { DxFileUploaderModule } from 'devextreme-angular';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

	@Input() modalCloseFunc;
	@Input() modalDismissFunc;
	@Input() isTypeModal: boolean;
	@Input() multiple: boolean;
	@Input() accept: string;
	@Input() uploads: any[];
	@Input() uploadURL: string;

	@Output() changed: EventEmitter<any>;
	
	showError: boolean;

	maxSize: number;
	errorMessage: string;

	constructor() {
		this.changed = new EventEmitter<any>();

		this.multiple = true;
		this.accept = '*';
		this.uploads = [];
		this.uploadURL = '/upload.php';
		this.maxSize = 5;
		this.errorMessage = '';
	}

	ngOnInit() {
	}

	onUploaded(event) {
		this.showError = false;
		this.errorMessage = '';
	}

	onUploadedError(event) {
		this.showError = true;
		this.errorMessage = '';
	}

	valueChanged(event) {
		this.showError = false;
		this.errorMessage = '';

		this.changed.emit(this.uploads);
	}

	onUploadStarted(event) {
		this.showError = false;
		this.errorMessage = '';
	}

	closeErrorMessage() {
		this.showError = false;
		this.errorMessage = '';
	}

	onOptionChanged(event) {
		if (event.value != null && event.value.length > 0) {
			const toRemove = [];
			event.value.forEach(file => {
				if (file.size > this.maxSize * 1000000) {
					toRemove.push(file);
					this.errorMessage = 'The file(s) are too big: ';
				}
			});

			let count = 0;
			toRemove.forEach(r => {
				count++;
				const index = event.value.indexOf(r, 0);
				if (index > -1) {
					this.errorMessage += r.name;
				if (count < toRemove.length) {
					this.errorMessage += ', ';
				} else {
					this.errorMessage += ' (limit ' + this.maxSize + ' mb)';
				}
				this.showError = true;
				event.value.splice(index, 1);
				}
			});
		}
	}

}
