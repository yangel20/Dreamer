export const fetchAllPhotos = () => {
    return $.ajax({
        method: "GET",
        url: "/api/photos"
    })
}

export const createPhoto = (photo) => {
    return $.ajax({
        method: "POST",
        url: "/api/photos",
        data: { photo: photo }
    })
}

export const fetchPhoto = (photoId) => {
    return $.ajax({
        method: "GET",
        url: `/api/photos/${photoId}`
    })
}