class StarsController < ApplicationController

  def create
    @doc = Document.find(params[:document_id])
    @star = current_user.stars.new(document: @doc)
    if @star.save
      add_notice("#{@doc.title} successfully Starred")
    else
      add_error(@star.errors.full_messages)
    end
    redirect_to document_url(@doc)
  end

  def destroy
    @star = Star.find(params[:id])
    doc = @star.document
    if @star.destroy
      add_notice("#{doc.title} successfully Un-Starred")
      redirect_to document_url(doc)
    else
      add_error(@star.errors.full_messages)
      redirect_to document_url(@star)
    end
  end

end