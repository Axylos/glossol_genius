module ApplicationHelper
  def sample_documents
    Document.last(10)
  end

end
