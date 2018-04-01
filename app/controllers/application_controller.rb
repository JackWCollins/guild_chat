class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  # Obviously this would not fly for a production app
  skip_before_action :verify_authenticity_token
end
