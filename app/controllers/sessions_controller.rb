class SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by(email: user_params[:email])
    if @user.is_password?(user_params[:password])
      sign_in_user(@user)
      redirect_to documents_url
    else
      flash.now[:errors] = "Invalid Credentials"
      render :new
    end
  end

  def destroy
    sign_out
    render :new
  end


  private

  def user_params
    params[:user].permit(:email, :password)
  end

end