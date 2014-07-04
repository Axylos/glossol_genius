class Api::DocumentsController < ApplicationController

  def index

    @documents = Document.where(' user_id = ?', 
                  params[:user_id]).includes(:references, :annotatings)
                  
    render "api/documents/index"
  end

  def show
    @document = Document.find(params[:id])
    render json: @document
  end
  
  
  def create
   
    @document = current_user.documents.new(doc_params)
    @document.referenced_text_ids = anno_params[:referenced_text_ids]
    @document.references.last.source_text = anno_params[:source_text]
    
    if @document.save
      p @document
      render json: @document
    else
      p @document.errors
      render json: { status: :unprocessable_entity }
    end
  end


  private

  def doc_params
    params.require(:document).permit(:title, :body)
  end
  
  def anno_params
    params[:annotatings]
  end
  
  def doc_is_annotation?
    !!params["annotatings"]
  end

end
