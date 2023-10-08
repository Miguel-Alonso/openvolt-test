import fs from 'fs';
import path from 'path';
import { cleanData } from './clean_data';

const dataDirectory = path.join(process.cwd(), 'data');

export function getData() {
  // Get file names under /data
  const fileNames = fs.readdirSync(dataDirectory);
  const allData = fileNames.map((fileName) => {
    // Read js file as string
    const fullPath = path.join(dataDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    return JSON.parse(fileContents).data;
  });

  return cleanData(allData[0], allData[1], allData[2]);
}
