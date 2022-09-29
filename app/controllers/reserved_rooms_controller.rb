class ReservedRoomsController < ApplicationController

    def create
        rsrvdroom = ReservedRoom.create!(room_id: params[:room_id], user_id: params[:user_id])
        rsrvdroom.room.update!(checkin: params[:checkin], checkout: params[:checkout], guests: params[:guests])
        render json: rsrvdroom.room, status: :created
    end
    def destroy
        rsrvdroom = ReservedRoom.find_by(user_id: current_user.id, room_id: params[:id])
        rsrvdroom.room.update(checkin: "", checkout: "", guests: 0)
        rsrvdroom.destroy
        head :no_content
    end
end