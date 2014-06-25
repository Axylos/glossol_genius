class AddSourceTextToAnnotations < ActiveRecord::Migration
  def change
    add_column :annotatings, :source_text, :text
  end
end
