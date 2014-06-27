require "application_controller"

class User < ActiveRecord::Base

  attr_reader :password
  validates :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :documents, class_name: "Document", foreign_key: :user_id
  has_many :stars, dependent: :destroy
  has_many :starred_documents, through: :stars, source: :document
  
  has_many :auths, dependent: :destroy


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

  def reset_token!
    self.update!(session_token: User.generate_token)
    return self.session_token
  end
  
  def display_name
    self.nick || self.email
  end
  
  
  
  def self.find_or_create_with_auth(auth_hash) 
    @user = User.find_by(auth_id: auth_hash[:uid])
    if @user
      return @user
    else
      @user = User.new(
        email: auth_hash[:info][:email], 
        #TODO: Figure Out Why nick breaks Heroku
        #nick: auth_hash[:info][:first_name],
        password: User.generate_token,
        auth_id: auth_hash[:uid])
      if @user.save && self.make_auth(auth_hash)
        return @user
      else
        return [false, @user]
      end
    end
  end
  
  
  private
  
  def self.make_auth(hash)
    @user.auths.create(uid: hash[:uid], provider: hash[:provider])
  end
  
end