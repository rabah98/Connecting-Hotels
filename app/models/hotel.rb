class Hotel < ApplicationRecord
    has_many :rooms

    validates :name, :location, :city, :email, :phone_number, presence: true
end
