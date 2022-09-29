class HotelsController < ApplicationController
    skip_before_action :authorized_user, except: :create

    def index 
        hotels = Hotel.all 
        render json: hotels
    end
    def create
        hotel = Hotel.create!(hotel_params)
        render json: hotel, status: :created
    end

    private
    
    def hotel_params
        params.permit(
        :name,
        :location,
        :picture,
        :city,
        :phone_number,
        :email 
        )
    end
end
