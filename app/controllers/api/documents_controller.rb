class Api::DocumentsController < ApplicationController

  def index
    if params[:user_id]
      @user = User.find(params[:user_id])
      render json: @user.documents
    else
      @documents = Document.all
      render json: @documents
    end
  end

  def show
    @document = Document.find(params[:id])
    render json: @document
  end

end