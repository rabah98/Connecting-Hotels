class Room < ApplicationRecord
  belongs_to :hotel
  has_many :reserved_rooms, dependent: :destroy
  has_many :users, through: :reserved_rooms

  # validates :room_id, presence: true
end
