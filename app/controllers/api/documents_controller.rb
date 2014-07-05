class Api::DocumentsController < ApplicationController

  def index

    if user_given?
      @documents = Document.where(' user_id = ?',
                   params[:user_id]).includes(:references, :annotatings)
    else
      @documents = Document.includes(:references, :annotatings).all
    end
    
              
    render "api/documents/index"
  end

  def show
    @document = Document.includes(:references, :annotatings).find(params[:id])
    render "api/documents/show"
  end
  
  
  def create
    
    @document = current_user.documents.new(doc_params)
    
    if ref_params
      #replace first with each block later
      @document.referenced_text_ids = ref_params.first[:referenced_text_ids]
      @document.references.last.source_text = ref_params.first[:source_text]
    end
    
    
    
    if @document.save
      id = @document.id
      binding.pry
      @document = Document.includes(:references, :annotatings).find(id)
      render "api/documents/show"
    else
      p @document.errors
      render json: { status: :unprocessable_entity }
    end
  end


  private

  def doc_params
    params.require(:document).permit(:title, :body)
  end
  
  def ref_params
    params[:references]
  end
  
  def doc_is_annotation?
    !!params["references"]
  end
  
  def user_given?
    !!params[:user_id]
  end
      
end
