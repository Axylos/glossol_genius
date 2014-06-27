class Auth < ActiveRecord::Base
  validates :uid, uniqueness: { scope: :provider }
  validates :provider, :uid, :user_id, presence: true
  
  belongs_to :user
  
end