module ApplicationHelper
  def sample_documents
    Document.last(10)
  end

  def current_user
    User.first
  end

end
