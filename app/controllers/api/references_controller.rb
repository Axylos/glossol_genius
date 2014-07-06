class Api::ReferencesController < ApplicationController

  def index
    @doc = Document.find(params[:document_id])
    render "api/references"
  end
  
  def create
    @doc = Document.find(params[:document_id])
    @doc.references.new({
      source_text: params[:reference][:source_text],
      source_document_id: params[:reference][:source_document_id]
    })
    if @doc.save
      render json: @doc.references.last
    else
      binding.pry
    end
  end

end