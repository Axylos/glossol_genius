module ApplicationHelper
  def sample_documents
    Document.where("user_id != ?", current_user.id).last(10)
  end

  def already_liked?(doc)
    !doc.fans.where("stars.user_id = ?", current_user.id).empty?
  end

end
