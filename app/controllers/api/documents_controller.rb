class Api::DocumentsController < ApplicationController
  
  def index
    @documents = Document.all
    render json: @documents
  end
  
  def show
    @document = Document.find(params[:id])
    render json: @document
  end
  
end