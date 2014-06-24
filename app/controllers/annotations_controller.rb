class AnnotationsController <ApplicationController

  def create
    @document = Document.new(body: doc_params[:body], title: doc_params[:title])
    @document.author = current_user

    if annotation_created
      p "good to go"
    else
      flash[:errors] << @document.errors.full_messages
      flash[:errors] << @annotation.errors.full_messages if @annotation
    end

    redirect_to document_url(params[:document_id])
  end


  private

  def doc_params
    params.require(:annotation).permit(:body, :source_text, :title)
  end

  def join_docs
    src_text = doc_params[:source_text].split
    @annotation = Annotation.create(
      source_document_id: params[:document_id],
      annotation_id: @document.id,
      source_text: src_text)
  end

  def annotation_created
    ActiveRecord::Base.transaction do
      @document.save
      join_docs
    end
  end

end