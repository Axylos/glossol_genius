class AnnotatingsController <ApplicationController

  def create
    @document = current_user.documents.new(
          body: doc_params[:body],
          title: doc_params[:title])

    if annotating_created
      redirect_to document_url(@document)
    else
      add_error(@document.errors.full_messages)
      add_error(@annotating.errors.full_messages) if @annotating
      redirect_to document_url(params[:document_id])
    end

  end

  def new
    @docs = Document.all
    @document = Document.find(params[:document_id])
  end


  private

  def doc_params
    params.require(:annotating).permit(:body, :source_text, :title)
  end

  def join_docs
    src_text = doc_params[:source_text].split
    @annotating = Annotating.create(
      source_document_id: params[:document_id],
      annotation_id: @document.id,
      source_text: src_text)
  end

  def annotating_created
    ActiveRecord::Base.transaction do
      @document.save
      join_docs
    end
  end

end