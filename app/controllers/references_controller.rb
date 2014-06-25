class ReferencesController < ApplicationController

  def new
    @document = Document.find(params[:document_id])
    @docs = Document.all
  end

  def create
    @reference = make_reference
    if @reference.save
      flash[:notices] ||= []
      flash[:notices] << "#{@reference} saved for #{@reference.text_selection}"
    else
      flash[:errors] ||= []
      flash[:errors] << @reference.errors.full_messages
    end
    redirect_to new_document_reference_url(params[:document_id])
  end


  private

  def make_reference
    src_text = ref_params[:source_text].split
    a = Annotation.new(
      source_document_id: ref_params[:ref_text],
      annotation_id: params[:document_id],
      source_text: src_text
    )
  end

  def ref_params
    params.require(:reference).permit(:source_text, :ref_text)
  end
end