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

  def create
    @document = current_user.documents.new(doc_params)
    if @document.save
      render json: @document
    else
      render json: { errors: @document.errors.full_messages,
                      status: :unprocessable_entity }
    end
  end



  private

  def doc_params
    params.require(:document).permit(:title, :body)
  end

end