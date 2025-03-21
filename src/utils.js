function getImageUrl(imageId,  size = 's') {
    return (
      'https://i.imgur.com/' +
      imageId +
      size +
      '.jpg'
    );
  }
  
  export default getImageUrl;