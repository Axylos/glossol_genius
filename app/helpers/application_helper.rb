module ApplicationHelper
  def sample_documents
    Document.last(10)
  end

  def text_selection(annotation)
    text = annotation.source_document.body

    text[annotation.source_text.first.to_i..annotation.source_text.last.to_i]
  end

end
