class PhotoAlbumLink < ApplicationRecord
    validates :photo_id, :album_id, presence: true

    belongs_to :photo,
    foreign_key: :photo_id,
    class_name: "Photo"

    belongs_to :album,
    foreign_key: :album_id,
    class_name: "Album"
end
