class RenameAnnotationsToAnnotatings < ActiveRecord::Migration
  def change
    rename_table :annotations, :annotatings
  end
end
