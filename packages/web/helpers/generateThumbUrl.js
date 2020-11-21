/**
 * Find out the thumbnail url of an image from the original url
 * @param {String} imageUrl
 */
export const getThumbUrl = imageUrl => {
  const imageName = imageUrl.substr(imageUrl.lastIndexOf('/') + 1);
  const thumbImageName = `thumb_${imageName}`;
  const extractedUrl = imageUrl.substr(0, imageUrl.lastIndexOf('/') + 1);
  const finalUrl = `${extractedUrl}${thumbImageName}`;
  return finalUrl;
};
