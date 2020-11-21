import { getThumbUrl } from './generateThumbUrl';
import { storage } from './init';

/**
 * Helper functions to upload multiple image to firebase storage
 * @param {Array} images
 */
export async function uploadMultipleImages(images) {
  let allImages = [];
  storage.ref().constructor.prototype.putFiles = function(files) {
    var ref = this;
    return Promise.all(
      files.map(function(file) {
        return ref.child(file.name).put(file);
      })
    );
  };
  const uploadedImages = await storage
    .ref()
    .putFiles(images)
    .then(function(metadatas) {
      return metadatas;
    });

  return Promise.all(
    uploadedImages.map(snapshot => {
      return new Promise(async (resolve, reject) => {
        await snapshot.ref.getDownloadURL().then(function(downloadURL) {
          const thumbUrl = getThumbUrl(downloadURL);
          allImages.push({
            url: thumbUrl,
            largeUrl: downloadURL,
          });
        });
        resolve(allImages);
      });
    })
  );
}
