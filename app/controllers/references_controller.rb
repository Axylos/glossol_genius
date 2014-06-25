class ReferencesController < ApplicationController

  before_filter :ensure_current_is_author

  def new
    @document = Document.find(params[:document_id])
    @docs = Document.all
  end

  def create
    @reference = make_reference
    if @reference.save
      flash[:notices] ||= []
      flash[:notices] << "#{@reference.text_selection} saved from
                          #{@reference.source_document.title}"
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

  def ensure_current_is_author
    author = Document.find(params[:document_id]).author
    unless author == current_user
      add_error("You must be the author of a document to add references!")
      redirect_to root_path
    end
  end
end