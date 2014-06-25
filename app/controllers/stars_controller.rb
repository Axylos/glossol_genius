class StarsController < ApplicationController

  def create
    @doc = Document.find(params[:document_id])
    @star = current_user.stars.new(document: @doc)
    if @star.save
      add_notice("#{@doc.title} successfully starred")
    else
      add_error(@star.errors.full_messages)
    end
    redirect_to document_url(@doc)
  end

  def destroy

  end

end