class UsersController < ApplicationController

  before_action :verify_signed_in, only: [:edit, :update]

  def new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in_user(@user)
      
      respond_to do |format|
        format.html { redirect_to user_documents_url(@user) }
        format.json { render json: @user } 
      end
        
    else
      respond_to do |format|
        format.html do
          flash.now[:errors] = @user.errors.full_messages
          render :new
        end
        
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
    @user = current_user
  end
  
  def update
    @user = current_user
    if @user.update_attributes(user_params)
      add_notice("Settings Successfully Updated!")
      redirect_to documents_url
    else
      add_error(@user.errors.full_messages)
      render :edit
    end
    
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :nick, :profile_pic) 
  end

end