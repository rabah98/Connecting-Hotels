class AddCheckinToRooms < ActiveRecord::Migration[6.1]
  def change
    add_column :rooms, :checkin, :string
    add_column :rooms, :checkout, :string
    add_column :rooms, :guests, :string
  end
end
