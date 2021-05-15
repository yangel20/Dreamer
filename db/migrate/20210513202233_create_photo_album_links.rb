class CreatePhotoAlbumLinks < ActiveRecord::Migration[5.2]
  def change
    create_table :photo_album_links do |t|
      t.integer :photo_id
      t.integer :album_id

      t.timestamps
    end
    add_index :photo_album_links, [:album_id, :photo_id], unique: true
  end
end