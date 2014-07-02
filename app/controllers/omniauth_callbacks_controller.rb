class OmniauthCallbacksController < ApplicationController

  skip_before_filter :verify_authenticity_token, :verify_signed_in

  def facebook
    auth_hash = request.env['omniauth.auth']
    @user = User.find_or_create_with_auth(auth_hash)

    if @user.is_a?(User)
      sign_in_user(@user)
      redirect_to "/bb#"

      #for rails-only version
      # redirect_to root_url
    else
      add_error(user[1].errors.full_messages)
      redirect_to documents_url
    end
  end
end
