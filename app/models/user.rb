class User < ActiveRecord::Base

  attr_reader :password
  validates :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :documents, class_name: "Document", foreign_key: :user_id

  has_many(
      :stars,
      class_name: "Star",
      foreign_key: :user_id,
      dependent: :destroy
    )

  has_many :starred_documents, through: :stars, source: :document


  def password=(password)
    @password = password || ""
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_token
    self.update(session_token: User.generate_token)
    return self.session_token
  end
end