class AddSourceTextToAnnotations < ActiveRecord::Migration
  def change
    add_column :annotations, :source_text, :text
  end
end
