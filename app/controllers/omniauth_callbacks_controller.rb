class OmniauthCallbacksController < ApplicationController
  
  skip_filter :verify_signed_in
  
  def facebook
    auth_hash = request.env['omniauth.auth']
  end
end
