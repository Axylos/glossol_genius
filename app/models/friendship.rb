class Friendship < ActiveRecord::Base

  belongs_to :friender
  belongs_to :befriended
end
