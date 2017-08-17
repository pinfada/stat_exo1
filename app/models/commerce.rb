class Commerce < ApplicationRecord
  has_many :categorizations
  has_many :products, -> { distinct }, through: :categorizations
  geocoded_by :adress1
  after_validation :geocode, :if => :adress1_changed?
end
