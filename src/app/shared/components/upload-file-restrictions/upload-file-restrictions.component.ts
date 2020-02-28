import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-upload-file-restrictions',
  templateUrl: './upload-file-restrictions.component.html',
  styleUrls: ['./upload-file-restrictions.component.scss']
})
export class UploadFileRestrictionsComponent implements OnInit {
  @Input() modalCloseFunc: any;
  @Input() modalDismissFunc: any;

  selectedFiles: File[];
  selectedFilesData: any[];
  inDropzone: boolean;

  timesheetImportLayoutDD: any[];
  selectedTimesheetImportLayout: any;

  dImportButton: boolean;

  // variables for error/success messages
  alertType: string;
  alertMessage: string;
  showAlert: any;

  constructor() { }

  ngOnInit() {

    this.resetAlertMessages();

    this.selectedFiles = [];
    this.selectedFilesData = [];

    this.initFileDropZone();

    this.disableImportButton();
  }

  initFileDropZone() {
    const component = this;

    const dropZone = document.getElementById('dropZone');

    // Optional.
    dropZone.addEventListener('dragover', function(e) {
      component.inDropzone = true;
      e.stopPropagation();
      e.preventDefault();

      e.dataTransfer.dropEffect = 'copy';
    });

    // Get file data on drop
    dropZone.addEventListener('drop', function(e) {
        e.stopPropagation();
        e.preventDefault();
        const files = e.dataTransfer.files; // Array of all files

        component.processFiles(files);

        component.inDropzone = false;

    });

    dropZone.addEventListener('dragleave', function(e) {
      component.inDropzone = false;
      e.stopPropagation();
      e.preventDefault();
    });
  }

  processFiles(files: FileList) {
    // this.displayAlertMessageService.resetGlobalMessage();
    this.resetAlertMessages();
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file: File = files.item(i);

        if (file.name.toLowerCase().includes('.csv') || file.name.toLowerCase().includes('.txt')) {

          this.selectedFiles.push(file);

          console.log(file.name);
          console.log(file.size);
          console.log(file.type);
          const reader: FileReader = new FileReader();
          reader.readAsText(file);
          reader.onload = (e) => {
             const csv: string | ArrayBuffer = reader.result;
             this.selectedFilesData.push(csv);
          };
        } else {
          this.setAlertMessage(true, 'warning', 'Please select the .csv or .txt file you wish to import');
        }
      }

      this.disableImportButton();

    }
  }

  removeSelectedFile(i) {
    this.selectedFiles.forEach( (item, index) => {
      if (index === i) {
        this.selectedFiles.splice(index, 1);
        this.selectedFilesData.splice(index, 1);
      }
    });

    (<HTMLInputElement>document.getElementById('Upload')).value = '';

    this.disableImportButton();
  }

  disableImportButton() {
    if ((this.selectedFiles.length > 0)) {
      this.dImportButton = false;
    } else {
      this.dImportButton = true;
    }
  }

  importFile() {
    this.setAlertMessage(true, 'success', 'Files uploaded successfully');
  }

  resetAlertMessages() {
    this.alertMessage = '';
    this.alertType = '';
    this.showAlert = '';
  }

  setAlertMessage(showAlert, alertType, alertMessage) {
    this.showAlert = showAlert;
    this.alertMessage = alertMessage;
    this.alertType = alertType;
  }

}
