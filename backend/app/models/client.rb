# frozen_string_literal: true

class Client < ApplicationRecord
  validates :name, :project, presence: true

  has_one :departament
  has_one :history
end
