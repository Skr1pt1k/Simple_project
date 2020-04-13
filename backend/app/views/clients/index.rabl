# frozen_string_literal: true

collection clients, object_root: false
attributes :id, :name, :project, :estimate, :budget, :start_date, :default_color

node :departament do |c|
  Departament.where(id: c.departament_id)
end

node :last_message do |c|
  c.history&.actions&.last&.action
end

node :manager do |c|
  User.where(id: c.history&.actions&.last&.user_id)
end

child :history do
  attributes :id
end
