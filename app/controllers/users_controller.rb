class UsersController < ApplicationController

  def new

  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in_user(@user)
      redirect_to documents_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end



  private

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end

end