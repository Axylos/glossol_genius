class SessionsController < ApplicationController

  before_action :verify_signed_in, only: [:destroy]

  def new
  end

  def create
    @user = User.find_by(email: user_params[:email])
    if @user && @user.is_password?(user_params[:password])
      sign_in_user(@user)
      respond_to do |format| 
        format.html { redirect_to user_documents_url(@user) }
        format.json { render json: @user }
      end
      
    else
      flash.now[:errors] ||= []
      flash.now[:errors] << "Invalid Credentials"
      
      respond_to do |format|
        format.html { render :new }
        format.json { render json: "Invalid Credentials"}
      end
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