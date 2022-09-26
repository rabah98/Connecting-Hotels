class User < ApplicationRecord
  has_secure_password

  has_many :reserved_rooms, dependent: :destroy
  has_many :rooms, through: :reserved_rooms


  private
  
  def User.digest(string)
    cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                  BCrypt::Engine.cost
    BCrypt::Password.create(string, cost: cost)
  end
end
