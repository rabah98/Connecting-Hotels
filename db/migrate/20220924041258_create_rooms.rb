class CreateRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.integer :price
      t.string :room_type
      t.string :image
      t.belongs_to :hotel, null: false, foreign_key: true

      t.timestamps
    end
  end
end
