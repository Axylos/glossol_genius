class Api::ReferencesController < ApplicationController

  def index
    @doc = Document.find(params[:document_id])
    render "api/references"
  end

end