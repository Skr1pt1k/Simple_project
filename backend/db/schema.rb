# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_09_161220) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "actions", force: :cascade do |t|
    t.date "date"
    t.string "action"
    t.bigint "history_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["history_id"], name: "index_actions_on_history_id"
    t.index ["user_id"], name: "index_actions_on_user_id"
  end

  create_table "clients", force: :cascade do |t|
    t.string "name"
    t.string "project"
    t.integer "estimate"
    t.integer "budget"
    t.date "start_date"
    t.bigint "departament_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["departament_id"], name: "index_clients_on_departament_id"
  end

  create_table "departaments", force: :cascade do |t|
    t.string "name"
    t.bigint "client_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["client_id"], name: "index_departaments_on_client_id"
  end

  create_table "histories", force: :cascade do |t|
    t.bigint "client_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["client_id"], name: "index_histories_on_client_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

end
