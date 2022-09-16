import fs from "fs";
import Jimp from "jimp";
import path from "path";

// filterImageFromURL
// helper function to download, filter, and save the filtered image locally
// returns the absolute path to the local image
// INPUTS
//    inputURL: string - a publicly accessible url to an image file
// RETURNS
//    an absolute path to a filtered image locally saved file

const imagesFullPath = path.resolve(__dirname, "../../images/filteredImage/");
export const filterImageFromUrl = async (inputURL: string) =>
  new Promise<string>(async (resolve, reject) => {
    try {
      const photo = await Jimp.read(inputURL);
      // const outpath =
      //   "/tmp/filtered." + Math.floor(Math.random() * 2000) + ".jpg";
      const savePath = path.normalize(
        `${imagesFullPath}-${Math.floor(Math.random() * 2000)}.jpg`
      );
      await photo
        .resize(300, 300) // resize
        .quality(100) // set JPEG quality
        .greyscale() // set greyscale
        .write(savePath, (img: any) => {
          resolve(savePath);
        });
    } catch (error) {
      reject(error);
    }
  });

// deleteLocalFiles
// helper function to delete files on the local disk
// useful to cleanup after tasks
// INPUTS
//    files: Array<string> an array of absolute paths to files
export async function deleteLocalFiles(files: Array<string>) {
  for (let file of files) {
    fs.unlinkSync(file);
  }
}
