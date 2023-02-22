export function getImageData(image) {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = function (e) {
      const dataURI = e.target.result;
      resolve(dataURI);
    };

    reader.readAsDataURL(image);
  });
}
