class Api::ReferencesController < ApplicationController

  def index
    @doc = Document.find(params[:document_id])
    render "api/references"
  end
  
  def create
    @doc = Document.find(params[:document_id])
    @doc.referenced_text_ids << params[:reference][:source_document_id]
    @doc.references.last.source_text = params[:reference][:source_text]
    if @doc.save
      render json: @doc.references.last
    else
      binding.pry
    end
  end

end