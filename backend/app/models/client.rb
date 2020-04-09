# frozen_string_literal: true

class Client < ApplicationRecord
  validates :name, :project, presence: true

  has_one :departament

  accepts_nested_attributes_for :departament, update_only: true
end
