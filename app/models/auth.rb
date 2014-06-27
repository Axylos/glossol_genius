class Auth < ActiveRecord::Base
  validates :uid, uniqueness: { scope: :provider }
  validates :provider, :uid, presence: true
  
  belongs_to :user
  
end