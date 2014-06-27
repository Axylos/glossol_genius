class OmniauthCallbacksController < ApplicationController
  
  skip_filter :verify_signed_in
  
  def facebook
    auth_hash = request.env['omniauth.auth']
    user = User.find_or_create_with_auth(auth_hash)
    
    if user.is_a?(User)
      sign_in_user(user)
      redirect_to user_documents_url(user)
    else
      add_error(user[1].errors.full_messages)
      redirect_to documents_url
    end
  end
  
  
  
  
end
