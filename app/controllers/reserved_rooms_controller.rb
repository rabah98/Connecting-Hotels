class ReservedRoomsController < ApplicationController
    def create
        room = ReservedRoom.create!(reservedRoom_params)
        render json: room, status: :created
    end
    def destroy
        room = ReservedRoom.find_by(user_id: current_user.id, room_id: params[:id])
        room.destroy
        head :no_content
    end

    private

    def reservedRoom_params 
        params.permit(
        :room_id,
        :user_id,
        )
    end
end