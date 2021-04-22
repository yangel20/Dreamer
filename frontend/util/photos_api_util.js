export const fetchAllPhotos = () => {
    return $.ajax({
        method: "GET",
        url: "/api/photos"
    })
};

export const createPhoto = (photoData) => {
    return $.ajax({
        method: "POST",
        url: "/api/photos",
        data: photoData,
        contentType: false,
        processData: false
    })
};

export const fetchPhoto = (photoId) => {
    return $.ajax({
        method: "GET",
        url: `/api/photos/${photoId}`
    })
};

export const deletePhoto = (photoId) => (
    $.ajax({
      method: "DELETE",
      url: `/api/photos/${photoId}`
    })
  );
  