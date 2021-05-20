export const fetchAllAlbums = () => {
    return $.ajax({
        method: "GET",
        url: "/api/albums"
    })
};

export const createAlbum = (albumData) => {
    return $.ajax({
        method: "POST",
        url: "/api/albums",
        data: albumData
    })
};

export const fetchAlbum = (albumId) => {
    return $.ajax({
        method: "GET",
        url: `/api/albums/${albumId}`
    })
};

export const deleteAlbum = (albumId) => (
    $.ajax({
      method: "DELETE",
      url: `/api/albums/${albumId}`
    })
  );
  