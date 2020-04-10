# frozen_string_literal: true

class Action < ApplicationRecord
  belongs_to :history

  has_one :user
end
