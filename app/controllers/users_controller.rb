class UsersController < ApplicationController

  skip_before_filter :verify_signed_in, only: [:new, :create]

  def new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in_user(@user)
      redirect_to user_documents_url(@user)
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end