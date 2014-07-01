class Api::AnnotationsController < ApplicationController

  def index
    @doc = Document.find(params[:document_id])
    render json: @doc.annotations
  end

end