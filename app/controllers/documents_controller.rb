class DocumentsController < ApplicationController

  def index
  end

  def new
    fail
  end

  def create
    @document = Document.new(doc_params)
    @document.author = current_user
    if @document.save
      redirect_to document_url(@document)
    else
      flash.now[:errors] = @document.errors.full_messages
      render :new
    end
  end

  def update
  end

  def destroy
  end

  def show
    @document = Document.find(params[:id])
  end


  private

  def doc_params
    params.require(:document).permit(:body, :title)
  end

end