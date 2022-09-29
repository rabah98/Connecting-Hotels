class User < ApplicationRecord
  has_secure_password

  has_many :reserved_rooms, dependent: :destroy
  has_many :rooms, through: :reserved_rooms

  validates :first_name, :last_name, presence: true
  validates :username, :email, presence: true, uniqueness: true
  


  private
  
  def User.digest(string)
    cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                  BCrypt::Engine.cost
    BCrypt::Password.create(string, cost: cost)
  end
end
