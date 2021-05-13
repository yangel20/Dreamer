export const fetchAllAlbums = () => {
    return $.ajax({
        method: "GET",
        url: "/api/albums"
    })
};

export const createAlbums = (albumData) => {
    return $.ajax({
        method: "POST",
        url: "/api/albums",
        data: albumData
    })
};

export const fetchAlbums = (albumId) => {
    return $.ajax({
        method: "GET",
        url: `/api/albums/${albumId}`
    })
};

export const deleteAlbums = (albumId) => (
    $.ajax({
      method: "DELETE",
      url: `/api/albums/${albumId}`
    })
  );
  