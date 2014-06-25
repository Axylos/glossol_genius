module ApplicationHelper
  def sample_documents
    Document.where("user_id != ?", current_user.id).last(10)
  end

end
