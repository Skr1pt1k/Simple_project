# frozen_string_literal: true

class Departament < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  belongs_to :client
end
