import { saveAs } from 'file-saver/FileSaver';
import { Response } from '@angular/http';

export const getFileName = (res: any, fileName?: string) => {
  let contentDisposition = '';

  fileName = !fileName ? '' : fileName;

  // If the fileName seems to have an extension, return it
  if (fileName.indexOf('.') === -1) {

    // If you dont have  fileName
    if (!fileName) {

      // Check to see if the response came back with a header... be might be able to get the fileName from content-disposition
      if (res.headers) {
        contentDisposition = res.headers.get('content-disposition') || '';

        const matches = /filename=([^;]+)/ig.exec(contentDisposition);
        fileName = (matches[1] || '').trim();

        // If we found it, return it
        if (fileName) {
          return fileName;
        }
      }
    }

    // If a desired fileName wasn't provided, name it untitled
    fileName = !fileName ? 'untitled' : fileName;

    // If the response has a type, lets parse it and use the ending as the file extension
    if (res.type) {
      const extension = res.type.split('/').pop();

      if (res.type !== extension) {
        fileName += '.' + extension;
      }
    }
  }

  return fileName;
};



export const saveFile = (blobContent: Blob, fileName: string) => {
  const blob = new Blob([blobContent], { type: 'application/octet-stream' });
  saveAs(blob, fileName);
};
