class User < ActiveRecord::Base

  attr_reader :password
  validates :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :documents, class_name: "Document", source: :user_id


  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
end