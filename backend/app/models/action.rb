# frozen_string_literal: true

class Action < ApplicationRecord
  belongs_to :history

  belongs_to :user
end
