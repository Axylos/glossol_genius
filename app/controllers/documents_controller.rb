class DocumentsController < ApplicationController

  before_action :ensure_owner, only: [:edit, :update, :destroy]
  before_action :verify_signed_in

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
      add_notice("#{@document.title} successfully updated!")
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
    @document = Document.find(params[:id])
    if @document.annotations.empty?
      title = @document.title
      if @document.destroy
        add_notice("#{title} successfully destroyed!")
        redirect_to documents_url
      end
    else
      add_error("You can't delete a doc referenced by others. Sorry!")
      redirect_to documents_url
    end
  end

  def show
    @document = Document.find(params[:id])
  end


  private

  def doc_params
    params.require(:document).permit(:body, :title)
  end

  def ensure_owner
    unless current_owner = Document.find(params[:id]).author
      add_error("You must be the document's author to do that!")
      redirect_to documents_url
    end
  end

end