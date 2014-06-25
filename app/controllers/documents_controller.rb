class DocumentsController < ApplicationController

  def index
    @my_documents = current_user.documents
  end

  def new
    @document = Document.new
  end

  def create
    @document = current_user.documents.new(doc_params)
    if @document.save
      redirect_to document_url(@document)
    else
      add_error(@document.errors.full_messages)
      render :new
    end
  end

  def update
    @document = Document.find(params[:id])
    if @document.update(doc_params)
      add_notice("#{@document.title} saved!")
      redirect_to document_url(@document)
    else
      add_error(@document.errors.full_messages)
      redirect_to edit_document_url(@document)
    end
  end

  def edit
    @document = Document.find(params[:id])
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