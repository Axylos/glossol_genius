class SessionsController < ApplicationController

  skip_before_filter :verify_signed_in, only: [:new, :create]

  def new
  end

  def create
    @user = User.find_by(email: user_params[:email])
    if @user && @user.is_password?(user_params[:password])
      sign_in_user(@user)
      redirect_to user_documents_url(@user)
    else
      flash.now[:errors] ||= []
      flash.now[:errors] << "Invalid Credentials"
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