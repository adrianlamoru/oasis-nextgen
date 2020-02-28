import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { getFileName, saveFile } from '../utils/file-download-helper';
import { ResponseContentType, RequestOptions, Response } from '@angular/http';
import { debounce, tap, catchError } from 'rxjs/operators';
// import { saveAs } from 'file-saver';

@Injectable()
export class FileService {
  constructor(
    private http: HttpClient
  ) { }


  /**
   *  The idea here is if the files are in a repository, you can use it to construct the url to the repository download the file
   * @param id unique identifier for the file
   * @param fileName? desired file name. If not provied, file will be name untitled
   */
  downloadFileById(id: string, fileName?: string) {
    const url = `/assets/pdf/samplePDFForPrint.pdf`;
    this.downloadFileByUrl(url, fileName);
  }

  /**
  *  The idea here is if you already have the url to the file, you can use it to download the file
  * @param url path to file
  * @param fileName? desired file name. If not provied, file will be name untitled
  */
  downloadFileByUrl(url: string, fileName?: string) {
    fileName = !fileName ? '' : fileName;

    // const file = this.http.get(url, { responseType: 'blob' }).subscribe(data => saveAs(data, `pdf report.pdf`));
    this.http.get(url, { responseType: 'blob' }).subscribe(res => {
      fileName = getFileName(res, fileName);
      saveFile(res, fileName);
    });
  }
}
