class Tag < ApplicationRecord
    validates :photo_id, :name, presence: true

    belongs_to :photo,
    foreign_key: :photo_id,
    class_name: "Photo"
end
