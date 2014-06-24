class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :sign_in_user, :signed_in?

  def current_user
    User.find_by(session_token: session[:token])
  end

  def signed_in?
    !!current_user
  end

  def sign_in_user(user)
    user.session_token = SecureRandom::urlsafe_base64(16)
    user.save
    session[:token] = user.session_token
  end

  def sign_out
    user = current_user
    user.session_token = nil
    user.save
  end
end
