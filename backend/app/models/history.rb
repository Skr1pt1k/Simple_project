# frozen_string_literal: true

class History < ApplicationRecord
  belongs_to :client

  has_many :actions, dependent: :destroy

  def ordered_actions
    actions.order(created_at: :desc)
  end
end
