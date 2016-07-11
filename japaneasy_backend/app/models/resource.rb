require 'carrierwave/orm/activerecord';

class Resource < ApplicationRecord

  mount_uploader :image, ImageUploader


end