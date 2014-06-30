class Api::SessionsController < ApplicationController
  
  def create
    if params[:params][:userIsNew] == "true"
      @user = User.new(user_params)
      render json:  { params: @user }
    else
      render json: { params: params[:params][:userIsNew]}
    end
    
  end
  
  def destroy
    sign_out
    unless signed_in?
      redirect_to "/bb"
    else
      render json: { status: 418 }
    end
  end
  
  
  private
  
  def user_params
    params.require(:params).require(:user).permit(:email, :nick, :password)
  end 
  
    
    
  
end